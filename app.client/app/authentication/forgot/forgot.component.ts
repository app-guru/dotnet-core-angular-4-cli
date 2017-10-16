import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  public mlforgot:MlForgot;
  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.mlforgot=new MlForgot;
 
  }
  btnForgot(){

  }

  onSubmit() {
    this.router.navigate ( [ '/' ] );
  }
}
class MlForgot {
  UserName: string;
}
