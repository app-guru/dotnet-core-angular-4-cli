import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public mlsignin: MlSignin;

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.mlsignin = new MlSignin(); }

  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])], password: [null, Validators.compose([Validators.required])]
    });
  }
  btnSignIn() {
    // this.router.navigate(['/']);
    throw new Error('poda');
  }



}

class MlSignin {
  UserName: string;
  Password: string;
}
