import { Component, ViewChild } from '@angular/core';
import { NavParams, MenuController, Nav } from 'ionic-angular';
import { AddEventPage } from '../../pages/add-event/add-event';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  text: string;
  @ViewChild(Nav) nav: Nav;

  constructor(
    public menuCtrl: MenuController ) {
      console.log('Hello MenuComponent Component');
      this.text = 'Hello World';
  }

  openMenu() {
    this.menuCtrl.open();
  }
 
  closeMenu() {
    this.menuCtrl.close();
  }
 
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  openPage(pageName){
    this.nav.push(AddEventPage);
  }


}
