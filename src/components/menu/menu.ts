import { Component, ViewChild } from '@angular/core';
import { NavParams, MenuController } from 'ionic-angular';


@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  text: string;

  constructor(public menuCtrl: MenuController) {
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

}
