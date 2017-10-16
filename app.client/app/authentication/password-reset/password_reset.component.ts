import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './password_reset.component.html',
  styleUrls: ['./password_reset.component.scss']
})
// tslint:disable-next-line:class-name
export class password_reset_Component implements OnInit {

  public mlreset: MlResetPassword;
  constructor(private router: Router) { }

  ngOnInit() {
    this.mlreset = new MlResetPassword();

  }
  btnReset() {
    this.router.navigate(['/']);
  }


}
class MlResetPassword {
  NewPassword: string;
}
