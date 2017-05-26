import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageData } from '../../providers/image-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imagesData: any;

  constructor(public navCtrl: NavController, public imagesService: ImageData) {

  }

  ionViewDidLoad(){
    this.imagesService.getJsonData().subscribe(
      result => {
        this.imagesData=result.data;
        console.log("Success : "+this.imagesData);
      },
      err =>{
        console.error("Error : "+err);
      } ,
      () => {
        console.log('getData completed');
      }
    );
  }

}
