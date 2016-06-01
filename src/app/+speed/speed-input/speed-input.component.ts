import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Control } from '@angular/common';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_RADIO_DIRECTIVES, MdRadioDispatcher } from '@angular2-material/radio';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import 'js-quantities';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/merge';

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
export class SpeedInputComponent implements OnDestroy, OnInit {
  @Input('system') som: string;
  @Output('select') onSelect = new EventEmitter<QtyModule.Qty>();

  speedSubscription: Subscription;

  speedUnits: string[];
  speed: Speed;

  scalar = new Control();
  unit = new Control();

  constructor() { }

  ngOnDestroy() {
    if (this.speedSubscription)
      this.speedSubscription.unsubscribe();
  }

  ngOnInit() {
    this.speedUnits = UOM[this.som || SOM_METRIC] || UOM[SOM_METRIC];
    this.speed = {
      scalar: 9,
      unit: this.speedUnits[1]
    };
    this.speedSubscription = this.initStreams();
  }

  private emitSpeed(s: Speed) {
    if (s.unit.indexOf('round') > -1) {
      s.scalar = s.scalar * 6;
      s.unit = s.unit.replace('round', 's');
    }

    this.onSelect.emit(Qty(s.scalar, s.unit));
  }

  private initStreams() {
    let scalarStream = this.scalar.valueChanges
      .debounceTime(400)
      // .distinctUntilChanged()
      .do(value => console.log('scalar', value))
      .map(value => this.speed.scalar = value);

    let unitStream = this.unit.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(value => console.log('unit', value))
      .map(value => this.speed.unit = value);

    return scalarStream.merge(unitStream)
      .debounceTime(200)
      .map(() => Object.assign({}, this.speed))
      .subscribe((s: Speed) => this.emitSpeed(s));
  }
}
