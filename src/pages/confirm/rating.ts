import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { NgZone } from '@angular/core';

import { ChatPage } from '../chat/chat';


@Component({
  selector: 'page-confirm-rating',
  templateUrl: 'rating.html'
})
export class ConfirmRatingPage2 {

    public showMatch: boolean = true;
    public matchName: string = "";
    public matchImageUrl: string = "";


  constructor(public navCtrl: NavController,
   public loadingCtrl: LoadingController, 
   public zone: NgZone,
   public params: NavParams) {
    let matches = this.params.get('likedBastards');
    this.matchName = matches[Math.round(Math.random() * (matches.length - 1))];
    this.matchImageUrl = "images/" + this.matchName + ".png";
    this.matchName = this.matchName[0].toUpperCase() + this.matchName.substr(1);
   }

  ionViewDidEnter() {
  }

  openChat() {
    this.navCtrl.push(ChatPage, {'name': this.matchName});
  }

}
