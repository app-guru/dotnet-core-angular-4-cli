import { PageErrorComponent } from './page-error/page-error.component';
import { password_reset_Component } from './password-reset/password_reset.component';

import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { OtpComponent } from './otp/otp.component';

export const AuthenticationRoutes: Routes = [
  {
    path: 'signin',
    children: [{
      path: '',
      component: SigninComponent
    },
    {
      path: 'request', children: [
        { path: 'forgot/pwd', component: ForgotComponent },
            { path: 'validate/otp', component: OtpComponent },
            { path: 'change/password-reset', component: password_reset_Component }
      ]
      },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
      path: '**',
      redirectTo: 'error?code=404'
    },
    {
      path: 'error', component: PageErrorComponent
    },
    {
      path: 'lockscreen',
      component: LockscreenComponent
    }]
  }
];
