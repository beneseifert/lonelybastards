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
  public mapsUrl = "images/map1.png";
  public onConfirmPage: boolean = true;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public zone: NgZone) {
      this.config = new Config();
  }

  ionViewDidEnter() {
      setTimeout(() => {
          let loader = this.loadingCtrl.create({
            content: "Changing location",
            duration: 2000
            });
            loader.present();
        setTimeout(() => {
            this.mapsUrl = "images/map2.png";
        this.changedState = true;
        this.zone.run(() => {});
        }, 2000);
      }, 5000);
  }

  openRating() {
    this.navCtrl.push(RatingPage);
  }


}
