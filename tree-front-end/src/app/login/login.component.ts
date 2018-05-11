import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServerHttpInterceptor } from './../core/http.interceptor';

import { TokenManager } from '../token/token-manager.component';
import { AppServices } from '../core/services';
import { RequestOptions } from '@angular/http';

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;

  constructor(public services: AppServices) { }

  ngOnInit() {
  }

  login() {
    const body = {'username': this.emailInput.nativeElement.value, 'password': this.passwordInput.nativeElement.value};
    this.services.postOject('login', body);

    // this.services.testPost();
  }
}
