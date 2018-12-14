import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { EventComponent } from '../../components/event/event';

import { MatButtonModule, MatCardModule, MatTabsModule, MatChipsModule, MatIconModule } from "@angular/material";

@NgModule({
  declarations: [
    HomePage,
    EventComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
