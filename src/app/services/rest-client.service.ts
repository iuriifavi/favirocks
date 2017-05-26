import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs'

@Injectable()
export class RestClientService {
  constructor(protected http: Http, protected path: string) { }

  protected getPath(path) {
    if (path)
      return this.path + '/' + path
    return this.path;
  }

  get(path?,params?) {
    return this.http.get(this.getPath(path), params).map(res => res.json())
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
