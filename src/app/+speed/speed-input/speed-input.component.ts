import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_RADIO_DIRECTIVES, MdRadioDispatcher } from '@angular2-material/radio';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import 'js-quantities';

@Component({
  moduleId: module.id,
  selector: 'app-speed-input',
  templateUrl: 'speed-input.component.html',
  styleUrls: ['speed-input.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_RADIO_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES
  ],
  providers: [
    MdRadioDispatcher
  ]
})
export class SpeedInputComponent implements OnInit {
  speedUnits = ['m/s', 'm/round', 'km/h'];
  speedUnit = 'm/round';

  constructor() { }

  ngOnInit() {
  }

}
