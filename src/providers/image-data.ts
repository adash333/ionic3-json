import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ImageData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ImageData {

  constructor(public http: Http) {
    console.log('Hello ImageData Provider');
  }

  getJsonData() {
    
    return this.http.get('assets/data/images.json').map(res => res.json());

  }

}
