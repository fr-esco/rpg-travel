import { Component, OnInit } from '@angular/core';

import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-speed',
  templateUrl: 'speed.component.html',
  styleUrls: ['speed.component.css'],
  directives: [
    MD_CARD_DIRECTIVES
  ]
})
export class SpeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
