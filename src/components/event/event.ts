import { Component, Input } from '@angular/core';

@Component({
  selector: 'event',
  templateUrl: 'event.html'
})

export class EventComponent {

  text: string;
  @Input() name: string;  
  @Input() image: string;
  
  constructor() {
    console.log('Hello EventComponent Component');
    this.text = 'Hello World';
  }

  
  eventClick(name){
    alert('clicked on '+name);
  }  
  
}
