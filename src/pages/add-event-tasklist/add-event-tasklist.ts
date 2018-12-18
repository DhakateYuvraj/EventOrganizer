import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { TaskItem } from '../../models/event-task-item.interface';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

@Component({
  selector: 'page-add-event-tasklist',
  templateUrl: 'add-event-tasklist.html',
})
export class AddEventTasklistPage {

  public eventId: string;
  private eventName: string;
  private tasks;
  public currentEventTask;
  taskItem = {} as TaskItem;
  taskItemRef$: AngularFireList<TaskItem[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase
  ) {
    this.eventId = this.navParams.get('eventId');
    this.eventName = this.navParams.get('eventName');
    this.taskItemRef$ = this.database.list('events-task-list');
    
  }

  getCurrentTask(eventId, next){
    let item = null;
    this.taskItemRef$.valueChanges().subscribe(data => {
      data.forEach(function (arrayItem) {
        if(arrayItem.eventId == eventId){
          item = arrayItem;
        }        
      });
      next(item)
      return false
    });
  }

  addItem(){
    let item = {
      eventId:this.eventId,
      tasks:[this.taskItem]

    }
    this.taskItemRef$.push(item);
  }

  updateItem(item){
    this.taskItemRef$.update(item);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventChecklistPage');
  }

  addEventTask(){
    this.getCurrentTask(this.eventId, (currentEventTask, t) => {
      if(currentEventTask && currentEventTask.eventId == this.eventId ){

        console.log(currentEventTask.$key)
        let x = this.database.object(`events-task-list/${currentEventTask.$key}`);
        console.log(x);
        currentEventTask.tasks.push(this.taskItem);
        console.log(currentEventTask);
        //this.taskItemRef$.update(currentEventTask)
        //this.updateItem(currentEventTask)
      }else{
        this.addItem();
      }
    })
    // if(this.currentEventTask && this.currentEventTask.eventId){
    //   console.log('add in old')
    // }else{
    //   let eventTask = {
    //     eventId:this.eventId,
    //     tasks:[this.taskItem]
  
    //   }
    //   this.taskItemRef$.push(eventTask);

    // }

    //this.navCtrl.push(AddEventTasklistPage,{eventId:this.dataKey,eventName:this.eventListItem.eventName});
    //console.log(this.eventListItem);
  }







}
