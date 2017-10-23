import { ErrorHandler, Injector, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TblLogger } from '../../websql/entity';
import { Select, QueryResult, Insert } from 'ng-db-helper';
@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  private _router: Router;
  private _route: ActivatedRoute;
  private logger: TblLogger;
  constructor(private _injector: Injector) {
    super(false);
    this.logger = new TblLogger();
  }

  public handleError(error: any): void {
    if (!this._router) {
      this._router = this._injector.get(Router);
    }
    if (!this._route) {
      this._route = this._injector.get(ActivatedRoute);
    }


    const err: Error = error;
    this.logger.Type = 'Error';
    this.logger.Message = err.name;
    this.logger.MessageData = err.stack;
    /*
        this.logger.save().subscribe(
          (data) => {
            Select(TblLogger)
              .where({ isDone: false })
              .orderBy('Id DESC')
              .exec().subscribe((qr: QueryResult<TblLogger>) => {
                if (qr.rows.length) {
                  this.logger = qr.rows.item(0);
                  console.log(this.logger);
                } else {
                  // item has not be found by id...
                }
              }, (er: any) => {
                // manage query error
              });
          },
          () => {
            // console.error(err);
            // if an error occur, its probably because category name is taken
          }
        );
    */

    Insert(this.logger).exec().subscribe((qr: QueryResult<TblLogger>) => {
      const id = qr.insertId;
      this._router.navigate(['/error/404'],
        {
          relativeTo: this._route,
          queryParams: { logno: id }
        }
      );
    }, (er) => {
      // manage error
    });
    // console.log(this._router.url);
    // console.log(err.message);
    // console.log(err.name);
    // console.log(err.stack);
  }
}
