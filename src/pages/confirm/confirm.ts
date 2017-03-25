import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { NgZone } from '@angular/core';

import { Config } from '../../config/config';

import { RatingPage } from '../rating/rating';

@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html'
})
export class ConfirmPage {

private config: Config = null;
public changedState: boolean = false;
  public mapsUrl = "https://maps.googleapis.com/maps/api/staticmap?center=Arabellastraße+23,Munich,Germany&markers=color:red%7CArabellastraße+23,Munich,Germany&zoom=16&size=500x400&key=";

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public zone: NgZone) {
      this.config = new Config();
      this.mapsUrl +=  this.config.googleMapsApiKey;
  }

  ionViewDidEnter() {
      setTimeout(() => {
          let loader = this.loadingCtrl.create({
            content: "Changing location",
            duration: 2000
            });
            loader.present();
        setTimeout(() => {
            this.mapsUrl = "https://maps.googleapis.com/maps/api/staticmap?center=Schloß+Bellevue,Berlin,Germany&markers=color:red%7CSchloß+Bellevue,Berlin,Germany&zoom=16&size=500x400&key=" + this.config.googleMapsApiKey;
        this.changedState = true;
        this.zone.run(() => {});
        }, 2000);
      }, 2000);
  }

  openRating() {
    this.navCtrl.push(RatingPage);
  }


}
