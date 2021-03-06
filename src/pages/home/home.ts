﻿import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Config } from '../../config/config';
import { ConfirmPage } from '../confirm/confirm';
import { HellNoPage } from '../hellno/hellno';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public mapsUrl = "https://maps.googleapis.com/maps/api/staticmap?center=Arabellastraße+23,Munich,Germany&markers=color:red%7CArabellastraße+23,Munich,Germany&zoom=16&size=500x400&key=";

  constructor(public navCtrl: NavController) {
      let config = new Config();
      this.mapsUrl +=  config.googleMapsApiKey;
  }

  public openConfirm() {
    this.navCtrl.push(ConfirmPage);
  }

  public openHellNo() {
    this.navCtrl.push(HellNoPage);
  }

}
