import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdToolbar} from '@angular2-material/toolbar';

import { SpeedComponent } from './+speed';

const defaultRoot = ['/speed'];

@Component({
  moduleId: module.id,
  selector: 'rpg-travel-app',
  templateUrl: 'rpg-travel.component.html',
  styleUrls: ['rpg-travel.component.css'],
  directives: [
    MdButton,
    MdIcon,
    MD_LIST_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MdToolbar,
    ROUTER_DIRECTIVES
  ],
  providers: [
    MdIconRegistry,
    ROUTER_PROVIDERS
  ]
})
@Routes([
  { path: '/speed', component: SpeedComponent }
])
export class RpgTravelAppComponent implements OnInit {
  title = 'RPG Travel';

  views = [
    {
      icon: 'directions_run',
      name: 'Speed',
      description: 'Speed Calculator',
      route: defaultRoot
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(defaultRoot);
  }
}
