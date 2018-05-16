import { Injectable } from '@angular/core';

import { Token } from './token';
import { AppVariables } from './../core/app.variables';

@Injectable()
export class TokenManager {

  public token: Token;

  constructor(
    public appVariables: AppVariables,
  ) { }

  refreshToken(tokenString: string) {
    if (this.token !== null) {
      this.token = new Token(tokenString, this.appVariables.tokenTimeLimitInSeconds);

      window.sessionStorage.setItem('TokenValue', this.token.value);
      window.sessionStorage.setItem('TokenExpirationTimeStamp', this.token.expirationTimeStamp.toString());
    }
  }

  isTokenExpired(): boolean {
    if (this.token && this.token.base64Value && this.token.expirationTimeStamp) {
      return this.token.expirationTimeStamp < new Date().valueOf();
    }

    return true;
  }

  getUserInfo() {
    try {
      if (!this.isTokenExpired()) {
        const tokenPiece = this.token.base64Value.split('.');
        const payloadString = window.atob(tokenPiece[1]);
        const user = JSON.parse(JSON.parse(payloadString).JG_CTCO);

        // this.appVariables.authUser.userId = user.UserId;
        // this.appVariables.authUser.userType = user.UserType;
      }
    } catch (error) {

    }
  }
}
