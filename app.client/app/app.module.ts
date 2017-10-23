import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
  imports: [
    CommonModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    SharedModule,
    NgbModule.forRoot(),
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
