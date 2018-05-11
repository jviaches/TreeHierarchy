import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpInterceptor {

  constructor(public baseHttp: Http) { }

  postO(url: string,
    body: any, opts: any = {},
    processResult: (result: any) => void): Observable<any> {

    return this.baseHttp.post(this.buildFullUrl(url), body, opts
      .subscribe((response: Response) => ''));

  }

  buildFullUrl(url: string): string {
    return 'localhost:4200' + url;
  }

}
