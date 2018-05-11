import { Component, OnInit } from '@angular/core';
import { HttpInterceptor } from './../core/http.interceptor';

import { TokenManager } from '../token/token-manager.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public appVariables: TokenManager,
    public http: HttpInterceptor
  ) { }

  ngOnInit() {
  }

  login(userId: string, password: string) {
    const body = { UserId: userId, Password: password };

    return this.http.postO('localhost:4200/Login', body, { aa: ''},
    (resp: any) => {}
  );
  }

}
