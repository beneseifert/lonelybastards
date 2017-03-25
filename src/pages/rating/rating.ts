import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { ConfirmRatingPage } from '../confirm/rating';


@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html'
})
export class RatingPage {

    public likedBastards: number = 0;
    public likedBastardsArr = [];

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
  }

  toggleBastard(name: string, index: number) {
      let found = this.likedBastardsArr.indexOf(name);
      let cards = document.getElementsByClassName("card-md");
    if (found >= 0) {
        this.likedBastardsArr.splice(found, 1);
        this.likedBastards--;
        cards[index].className = cards[index].className.replace(" active", "");
    } else {
        this.likedBastardsArr.push(name);
        this.likedBastards++;
        cards[index].className += " active";
    }
  }

  openConfirmRating() {
    this.navCtrl.push(ConfirmRatingPage, {'likedBastards': this.likedBastardsArr});
  }


}
