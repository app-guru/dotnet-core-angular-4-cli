import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  router: Router;

  constructor(private injector: Injector) {
    this.router = this.injector.get(Router);
  }

  handleError(error) {
    alert(1);
    super.handleError(error);
  }
}
