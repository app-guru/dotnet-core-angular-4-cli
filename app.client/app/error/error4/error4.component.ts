import { Component } from '@angular/core';
import { TblLogger } from 'shared/websql/entity';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Select, QueryResult } from 'ng-db-helper';

@Component({
  selector: 'app-error4',
  templateUrl: './error4.component.html',
  styleUrls: ['./error4.component.scss']
})
export class Error4Component {
  private logger: TblLogger;
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
    console.log(_router);
    this._activatedRoute.queryParams.subscribe((params: Params) => {
      const logno = params['logno'];
      console.log(logno);
      if (logno !== NaN) {
        Select(TblLogger).where({ Id: logno }).exec()
          .subscribe((qr: QueryResult<TblLogger>) => {
            this.logger = qr.rows.item(0);
            console.log(this.logger);
          }, (er) => {
            // manage error
          });
      } else {
        this.logger = new TblLogger();
      }
    });

  }
}
