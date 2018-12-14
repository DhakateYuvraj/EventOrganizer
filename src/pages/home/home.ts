import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AddEventPage } from '../add-event/add-event';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  private eventsList;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.eventsList= [{Name:"COFFEE",color:"#f3bd75",font:"sb-bistro-coffee"},
    {Name:"CAKES",color:"#f17fa0",font:"sb-bistro-cake"},
    {Name:"BURGERS",color:"#6de4e5",font:"sb-bistro-burger"},
    {Name:"CHICKEN",color:"#b3e071",font:"sb-bistro-chicken"},
    {Name:"DESERT",color:"#9E9E9E",font:"sb-bistro-dessert"},
    {Name:"DRINKS",color:"rgba(255, 87, 34, 0.89)",font:"sb-bistro-drinks"},
    {Name:"ICE CREAMS",color:"rgba(255, 193, 7, 0.7)",font:"sb-bistro-icecream"}];
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  openAddEvent(){
    this.navCtrl.push(AddEventPage);
  }


}
