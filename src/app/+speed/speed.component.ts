import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import 'js-quantities';

import { SpeedInputComponent } from './speed-input/speed-input.component';

@Component({
  moduleId: module.id,
  selector: 'app-speed',
  templateUrl: 'speed.component.html',
  styleUrls: ['speed.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    SpeedInputComponent
  ]
})
export class SpeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  speed($event) {
    console.info('event', $event);
  }
}
