import { ErrorHandler, Injector, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  private _router: Router;
  constructor(private _injector: Injector) {
    super(false);
  }

  public handleError(error: any): void {
    if (!this._router) {
      this._router = this._injector.get(Router);
    }
    const err: Error = error;
    console.log(this._router.url);
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
  }
}
