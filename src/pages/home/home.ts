import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from "../info/info";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public data:any={
    curp:"",
    genero:null
  };
  constructor(public navCtrl: NavController) {

  }
  clicked():void{
    var aux=this.data.curp.charAt(10);
    console.log(this.data.curp.charAt(10));
    if(aux==='H' || aux==='h'){
      this.data.genero=true;
    }
    if(aux==='M' || aux==='m'){
      this.data.genero=false;
    }
    this.navCtrl.push(InfoPage,{info:this.data});
  }
}
