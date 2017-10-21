import { Http, Request, RequestOptions, RequestOptionsArgs, Response, ConnectionBackend, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/mergeMap";


const DEFAULT_HEADER_NAME = 'Authorization';
const DEFAULT_HEADER_PREFIX_BEARER = 'Bearer';

export class InterceptorConfig {


  headerName: string = DEFAULT_HEADER_NAME;
  headerPrefix: string = DEFAULT_HEADER_PREFIX_BEARER;
  noTokenError: boolean = false;

  constructor(config?: InterceptorConfigOptional) {
    config = config || {};
    Object.assign(this, config);
  }
}

export interface InterceptorConfigOptional {
  headerName?: string;
  headerPrefix?: string;
  noTokenError?: boolean;
}
