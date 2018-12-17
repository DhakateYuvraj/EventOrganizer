import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { EventListItem } from '../../models/event-list-item.interface'
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs-compat';

import { AddEventPage } from '../add-event/add-event';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  private dataKey;
  eventListRef$: AngularFireList<EventListItem[]>;

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public menuCtrl: MenuController,
  private database: AngularFireDatabase) {
    this.eventListRef$ = this.database.list('events-list').valueChanges();

    //this.eventListRef$.valueChanges().subscribe(x => console.log(x))

    console.log(this.eventListRef$);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  openAddEvent(){
    this.dataKey = this.navCtrl.push(AddEventPage)
  }


}
