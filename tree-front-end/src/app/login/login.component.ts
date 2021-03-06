import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServerHttpInterceptor } from './../shared/core/http.interceptor';

import { TokenManager } from '../shared/token/token-manager.component';
import { AppServices } from '../shared/core/services/app.services';
import { RequestOptions } from '@angular/http';

import { AuthService } from '../shared/core/services/auth.service';

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;

  constructor(public services: AppServices, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    const body = {'username': this.emailInput.nativeElement.value, 'password': this.passwordInput.nativeElement.value};
    //this.services.postOject('login', body);

    // this.services.testPost();
    this.authService.login(body.username, body.password);
  }
}
