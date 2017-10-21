import { PageErrorComponent } from './page-error/page-error.component';
import { password_reset_Component } from './password-reset/password_reset.component';
import { OtpComponent } from './otp/otp.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutes } from './authentication.routing';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    ForgotComponent,
    OtpComponent,
    password_reset_Component,
    LockscreenComponent,
    PageErrorComponent
  ]
})
export class AuthenticationModule {}
