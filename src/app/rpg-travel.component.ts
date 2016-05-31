import { Component } from '@angular/core';
import { SpeedComponent } from './+speed';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'rpg-travel-app',
  templateUrl: 'rpg-travel.component.html',
  styleUrls: ['rpg-travel.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/speed', component: SpeedComponent}
])
export class RpgTravelAppComponent {
  title = 'rpg-travel works!';
}
