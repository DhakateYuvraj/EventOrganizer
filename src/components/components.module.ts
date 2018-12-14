import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { EventComponent } from './event/event';
@NgModule({
	declarations: [MenuComponent,
    EventComponent],
	imports: [],
	exports: [MenuComponent,
    EventComponent]
})
export class ComponentsModule {}
