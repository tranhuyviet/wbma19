import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Media } from '../../../../interfaces/media';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  constructor(public http: HttpClient) {
  }

  getAllMedia() {
    return this.http.get('http://media.mw.metropolia.fi/wbma/media');
  }

}
