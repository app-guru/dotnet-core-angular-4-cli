import { ErrorHandler, Injector, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TblLogger } from '../db-store/logger';
@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  private _router: Router;
  private logger: TblLogger;
  constructor(private _injector: Injector) {
    super(false);
    this.logger = new TblLogger();
  }

  public handleError(error: any): void {
    if (!this._router) {
      this._router = this._injector.get(Router);
    }
    const err: Error = error;
    this.logger.Message = err.name;
    this.logger.MessageData = err.stack;
    this.logger.save().subscribe(
      () => {
        // this.viewCtrl.dismiss();
        console.log('save success');
      },
      () => {
        // console.error(err);
        // if an error occur, its probably because category name is taken
      }
    );
    // console.log(this._router.url);
    // console.log(err.message);
    // console.log(err.name);
    // console.log(err.stack);
  }
}
