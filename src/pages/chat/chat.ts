import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

    public name: string = "";

  constructor(public navCtrl: NavController, private params: NavParams) {
      this.name = params.get("name");
  }


}
