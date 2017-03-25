import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-hellno',
  templateUrl: 'hellno.html'
})
export class HellNoPage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {}

  public searchAgain() {
      
        let loader = this.loadingCtrl.create({
        content: "Searching for other Local Mates",
        duration: 3000
        });
        loader.present();
        setTimeout(() => {this.navCtrl.pop()}, 3000);
  }

}
