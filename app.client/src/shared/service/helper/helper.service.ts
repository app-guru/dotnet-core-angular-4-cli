// ============================================
// Author						: Prabakaran
// Description			:
// Date							:
// ============================================
import { Injectable } from '@angular/core';
import { TblLogger } from 'shared/websql/entity';
import { QueryResult, Insert, Select } from 'ng-db-helper';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class HelperService {
  public _logger: srvlogger;
  constructor(private router: Router) {
    this._logger = new srvlogger();
  }
  getReportErrorUrl(): string {
    let modulename = this.getModuleName();
    if (modulename === 'app') {
      modulename = '/app';
    } else if (modulename === 'auth') {
      modulename = '/auth';
    } else {
      modulename = '';
    }
    const url = `${modulename}/error`;
    return url;
  }
  getModuleName(): string {
    const sptUrl = this.router.url.split('/');
    let modulename = '';
    if (sptUrl !== undefined && sptUrl !== null) {
      if (sptUrl.length >= 1) {
        modulename = sptUrl[1].toString();
      }
    }
    return modulename;
  }
}

class srvlogger {
  constructor() {}
  insert(_log: TblLogger): Observable<QueryResult<any>> {
    return Insert(_log).exec();
  }
  read(id: number): Observable<QueryResult<TblLogger>> {
    return Select(TblLogger)
      .where({ Id: id })
      .exec();
  }
}
