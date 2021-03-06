import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DigitransitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DigitransitProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DigitransitProvider Provider');
  }

  getDigitransit() {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql');
  }

}
