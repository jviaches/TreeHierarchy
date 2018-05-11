
export class Token {
  expirationTimeStamp: number;
  value: string;
  base64Value: string;

  constructor(token: string, tokenTimeLimitInSeconds: number) {
    if (token !== '') {
      this.base64Value = token;
    }

    this.expirationTimeStamp = new Date().setSeconds(new Date().getSeconds() + tokenTimeLimitInSeconds).valueOf();
  }
}
