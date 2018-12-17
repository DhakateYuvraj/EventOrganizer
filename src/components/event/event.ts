import { Component, Input } from '@angular/core';

@Component({
  selector: 'event',
  templateUrl: 'event.html'
})

export class EventComponent {

  text: string;
  @Input() name: string;  
  @Input() desc: string;  
  @Input() image: string;
  
  constructor() {

  }
  
  eventClick(name){
    alert('clicked on '+name);
  }  
  
}
