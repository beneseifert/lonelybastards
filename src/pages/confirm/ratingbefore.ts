import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { NgZone } from '@angular/core';

import { ConfirmRatingPage2 } from '../confirm/rating';


@Component({
  selector: 'page-confirm-rating',
  templateUrl: 'confirm.html'
})
export class ConfirmRatingPage1 {

    public onConfirmPage: boolean = false;
    public showMatch: boolean = false;
    public changedState: boolean = true;
    public mapsUrl: string = "images/map2.png";
    public likedBastardsArr = [];

  constructor(public navCtrl: NavController,
   public loadingCtrl: LoadingController, 
   public zone: NgZone,
   public params: NavParams) {
       this.likedBastardsArr = params.get("likedBastards");
    }

  ionViewDidEnter() {
      setTimeout(() => {
        this.showMatch = true;
      }, 2000);
  }

  openChat() {
    this.navCtrl.push(ConfirmRatingPage2, {'likedBastards': this.likedBastardsArr});
  }

}
