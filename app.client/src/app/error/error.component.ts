import { Title } from '@angular/platform-browser';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TblLogger, HelperService } from 'shared';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class AppErrorComponent implements OnInit, AfterViewInit {
  public logger: TblLogger;
  public logno = 0;
  public ErrorCode = 500;
  public Message = 'Unknow error raised';
  public MessageData = 'Unknow error raised from unknow source, this useally happens because of error not logged reasons.';
  public stackData: any;
  constructor(private _lib: HelperService) {
    try {
      // this._activatedRoute.queryParams.subscribe((params: Params) => {
      //   if (params['logno'] !== undefined) {
      //     this.logno = parseInt(params['logno'], null);
      //   }
      //   if (params['code'] !== undefined) {
      //     this.ErrorCode = params['code'];
      //   }
      // });
      if (this.logno !== 0) {
        this._lib._logger.read(this.logno).subscribe(
          itm => {
            console.log(itm.rows);
            if (itm.rows.length > 0) {
              this.logger = itm.rows.item(0);
              this.MessageData = this.logger.MessageData;
              this.Message = this.logger.Message;
              this.stackData = this.stackData;
            }
          },
          err => {}
        );
      }
    } catch (error) {
      console.log('error-constructor', error);
    }
    console.log('log-no', this.logno);
    console.log('Code', this.ErrorCode);
    console.log('Message', this.Message);
    console.log('MessageData', this.MessageData);
    console.log('stackData', this.stackData);
  }

  ngOnInit(): void {
    // alert('ngOnInit');
  }
  ngAfterViewInit(): void {
    // alert('ngAfterViewInit');
  }
}
