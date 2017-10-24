import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  ActivatedRoute
} from '@angular/router';
import { TblLogger } from 'shared/websql/entity';
import { Select, QueryResult, Insert } from 'ng-db-helper';
import { HelperService } from 'shared';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private _lib: HelperService, private _router: Router) {
    this._router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
    this._router.errorHandler = (event: any) => {};
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      try {
      } catch (error) {}
    }
    if (event instanceof NavigationEnd) {
      try {
      } catch (error) {}
    }
    if (event instanceof NavigationCancel) {
      try {
      } catch (error) {}
    }
    if (event instanceof NavigationError) {
      alert('nav-error');
      const logger = new TblLogger();
      logger.Type = 'Error';
      logger.Message = event.error;
      logger.StackData = event.toString();
      logger.MessageData = 'Url : ' + event.url;
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
                queryParams: { code: 404, logno: id }
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
            errorcode: 404,
            Message: logger.Message,
            MessageData: logger.MessageData,
            StackData: logger.StackData
          }
        });
      }
    }
  }
}
