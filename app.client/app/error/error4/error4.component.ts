import { Component } from '@angular/core';
import { TblLogger } from 'shared/websql/entity';
import { Router } from '@angular/router';
import { Select, QueryResult } from 'ng-db-helper';

@Component({
  selector: 'app-error4',
  templateUrl: './error4.component.html',
  styleUrls: ['./error4.component.scss']
})
export class Error4Component {
  private logger: TblLogger;
  constructor(private _router: Router) {
    console.log(_router);

    Select(TblLogger).where({ Id: 1 }).exec()
      .subscribe((qr: QueryResult<TblLogger>) => {
        this.logger = qr.rows.item(0);
      }, (er) => {
        // manage error
      });
  }
}
