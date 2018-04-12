import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  public data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data=navParams.get("info");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
