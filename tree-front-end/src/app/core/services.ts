import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

// @Injectable({
//   // we declare that this service should be created
//   // by the root application injector.
//   providedIn: 'root',
// })
@Injectable()
export class AppServices {

  public serverURL = 'http://localhost:58571/api/';

  constructor(private http: Http) { }

  postOject(url: string, body: any) {

    // const data = {"username": "mario", "password": "secret"}
    const customHeaders = new Headers();
    customHeaders.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: customHeaders });

    this.http.post(this.buildFullUrl(url), body, options).subscribe((resp) => console.log(resp));
  }

  buildFullUrl(url: string): string {
    return this.serverURL + url;
  }

  testPost() {
    const data = { "username": "mario", "password": "secret" }
    const customHeaders = new Headers();
    customHeaders.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: customHeaders });

    this.http.post('http://localhost:58571/api/login', data, options)
      .subscribe((resp) => console.log(resp));

  }
}
