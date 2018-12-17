import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventListItem } from '../../models/event-list-item.interface'
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

import { AddEventTasklistPage } from '../add-event-tasklist/add-event-tasklist';

@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  eventListItem = {} as EventListItem;
  eventListRef$: AngularFireList<EventListItem[]>;
  public dataKey: string;
  
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private database: AngularFireDatabase
  ) {
    this.eventListRef$ = this.database.list('events-list');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  addEvent(){
    this.dataKey = this.eventListRef$.push(this.eventListItem).getKey();
    console.log(this.dataKey);
    this.navCtrl.push(AddEventTasklistPage,{eventId:this.dataKey,eventName:this.eventListItem.eventName});
    //console.log(this.eventListItem);
  }
}
