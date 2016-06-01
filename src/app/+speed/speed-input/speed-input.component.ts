import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_RADIO_DIRECTIVES, MdRadioDispatcher } from '@angular2-material/radio';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import 'js-quantities';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

const SOM_METRIC = 'metric';
const SOM_IMPERIAL = 'imperial';
const UOM = {
  [SOM_METRIC]: ['m/s', 'm/round', 'km/h'],
  [SOM_IMPERIAL]: ['ft/s', 'ft/round', 'kph', 'mph'],
};

interface Speed {
  scalar: number;
  unit: string;
}

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
  @Input('system') som: string;
  @Output('select') onSelect = new EventEmitter<QtyModule.Qty>();

  speedUnits: string[];
  speed: Speed;

  speedStream = new Subject<Speed>();

  constructor() { }

  ngOnInit() {
    this.speedUnits = UOM[this.som || SOM_METRIC] || UOM[SOM_METRIC];
    this.speed = {
      scalar: 9,
      unit: this.speedUnits[1]
    };

    this.speedStream
      .debounceTime(3000)
      .distinctUntilChanged((x: Speed, y: Speed) => x.scalar === y.scalar && x.unit === y.unit)
      .subscribe((s: Speed) => this.emitSpeed(s));
  }

  buffer() {
    console.log('buffer', this.speed);
    this.speedStream.next(Object.assign({}, this.speed));
  }

  speedUnit(unit: string) {
    console.log('speedUnit', unit);
    this.speed.unit = unit;
    this.buffer();
  }

  speedScalar(scalar: number) {
    console.log('speedScalar', scalar);
    this.speed.scalar = scalar;
    this.buffer();
  }

  emitSpeed(s: Speed) {
    if (s.unit.indexOf('round') > -1) {
      s.scalar = s.scalar * 6;
      s.unit = s.unit.replace('round', 's');
    }

    this.onSelect.emit(Qty(s.scalar, s.unit));
  }
}
