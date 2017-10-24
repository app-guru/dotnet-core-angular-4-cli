import { ErrorHandler, Injector, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TblLogger } from '../../websql/entity';
import { Select, QueryResult, Insert } from 'ng-db-helper';
import { HelperService } from 'shared/service/helper';
@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  private _lib: HelperService;
  private _router: Router;
  constructor(private _injector: Injector) {
    super(false);
  }

  public handleError(error: any): void {
    alert('global-error');
    if (!this._lib) {
      this._lib = this._injector.get(HelperService);
    }
    if (!this._router) {
      this._router = this._injector.get(Router);
    }
    const err: Error = error;
    const logger = new TblLogger();
    logger.Type = 'Error';
    logger.Message = err.name;
    logger.MessageData = err.message;
    logger.StackData = err.stack;
    const url = this._lib.getReportErrorUrl();
    try {
      if (
        this._router.url !== '/app/error' &&
        this._router.url !== '/auth/error' &&
        this._router.url !== '/error'
      ) {
        this._lib._logger.insert(logger).subscribe(
          (qr: QueryResult<TblLogger>) => {
            const id = qr.insertId;

            this._router.navigate([url], {
              replaceUrl: true,
              queryParams: { code: 500.3, logno: id }
            });
          },
          er => {
            throw new Error(er.toString());
          }
        );
      } else {
        console.log(JSON.stringify(logger));
      }
    } catch (err) {
      this._router.navigate([url], {
        queryParams: {
          code: 'unknown',
          errorcode: 500.3,
          Message: logger.Message,
          MessageData: logger.MessageData,
          StackData: logger.StackData
        }
      });
    }
  }
}
