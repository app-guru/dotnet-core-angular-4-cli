import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  public mlotp: MlOtp;
  constructor(private router: Router) { }

  ngOnInit() {
    this.mlotp = new MlOtp();

  }
  btnOtp() {
    this.router.navigate(['/authentication/signin/request/change/password-reset']);
  }


}
class MlOtp {
  Otp: string;
}
