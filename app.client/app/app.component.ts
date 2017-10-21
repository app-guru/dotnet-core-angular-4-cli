import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
    router.errorHandler = (event: any) => {};
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
      try {
        this.router.navigate([
          'error/404',
          { data: { errorCode: 404, msgData: event } }
        ]);
      } catch (error) {}
    }
  }
}
