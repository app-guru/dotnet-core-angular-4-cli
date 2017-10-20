import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.scss']
})
export class PageErrorComponent implements OnInit {
  public Title: string;
  public Message: string;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.Title = '501';
    this.Message = 'Ooops something went wrong....!';
  }
}

