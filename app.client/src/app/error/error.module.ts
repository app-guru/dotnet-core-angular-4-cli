import { AppErrorComponent } from './error.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', children: [{ path: '', component: AppErrorComponent }] }
    ])
  ],
  declarations: [AppErrorComponent]
})
export class AppErrorModule {}
