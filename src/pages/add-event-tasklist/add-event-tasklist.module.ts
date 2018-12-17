import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEventTasklistPage } from './add-event-tasklist';

@NgModule({
  declarations: [
    AddEventTasklistPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEventTasklistPage),
  ],
})
export class AddEventTasklistPageModule {}
