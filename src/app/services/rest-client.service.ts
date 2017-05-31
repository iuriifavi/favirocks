import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http'

import 'rxjs'

@Injectable()
export class RestClientService {
  constructor(protected path: string, protected http: Http) { }

  protected getPath(path) {
    if (path)
      return this.path + '/' + path
    return this.path;
  }

  protected getParams(inputParams?: any): RequestOptions {
    var params = new URLSearchParams();
    if (params)
      for (let prop in inputParams) {
        if (inputParams.hasOwnProperty(prop)) {
          params.set(prop, inputParams[prop]);
        }
      }
    return new RequestOptions({ search: params });
  }

  get(path?: any,params?: any) {
    return this.http.get(this.getPath(path), this.getParams(params)).map(res => res.json())
  }

  post(body, params?) {
    return this.http.post(this.path, body, params).map(res => res.json())
  }

  put(body, path?, params?) {
    return this.http.put(this.getPath(path), body, params).map(res => res.json())
  }

  delete(path?, params?) {
    return this.http.delete(this.getPath(path), params).map(res => res.json())
  }

}
