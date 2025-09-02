import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashborad/server-status/server-status.component';
import { TrafficComponent } from './dashborad/traffic/traffic.component';
import { TicketsComponent } from './dashborad/tickets/tickets.component';
import { ItemComponent } from './dashborad/item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent, ItemComponent],
})
export class AppComponent {

}
