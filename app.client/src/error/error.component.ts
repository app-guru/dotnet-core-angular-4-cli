// ============================================
// Author						: Prabakaran
// Description			:
// Date							:
// ============================================
import { Component, OnInit } from '@angular/core';
import { TblLogger } from 'shared/websql/entity';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Select, QueryResult } from 'ng-db-helper';
import { HelperService } from 'shared/service';

@Component({
  selector: 'error-layout',
  templateUrl: './error.component.html'
})
export class ErrorComponent {
  public logger: TblLogger;
  public logno = 500;
  public ErrorCode = 500;
  public Message = 'Unknow error raised';
  public MessageData = 'Unknow error raised from unknow source, this useally happens because of error not logged reasons.';
  public stackData: any;
  constructor(
    private _lib: HelperService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['logno'] !== undefined) {
        this.logno = params['logno'];
      }
      if (params['code'] !== undefined) {
        this.ErrorCode = params['code'];
      }
    });
    this._lib._logger.read(this.logno).subscribe(itm => {
      if (itm.rows.length > 0) {
        this.logger = itm.rows.item(0);
        this.MessageData = this.logger.MessageData;
        this.Message = this.logger.Message;
        this.stackData = this.stackData;
      }
    });
    console.log('log-no', this.logno);
    console.log('Code', this.ErrorCode);
    console.log('Message', this.Message);
    console.log('MessageData', this.MessageData);
    console.log('stackData', this.stackData);
  }
}
