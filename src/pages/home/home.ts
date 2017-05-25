import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageData } from '../../providers/image-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public imagesService: ImageData) {

  }

  ionViewDidLoad() {
    this.imagesService.getJsonData();
  }

}
