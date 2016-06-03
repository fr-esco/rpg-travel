import { Component, Input, OnInit, Output } from '@angular/core';
import 'js-quantities';

@Component({
  moduleId: module.id,
  selector: 'app-speed-output-value',
  templateUrl: 'speed-output-value.component.html',
  styleUrls: ['speed-output-value.component.css']
})
export class SpeedOutputValueComponent implements OnInit {
  _base: QtyModule.Qty = Qty(1);
  value: number;

  @Input() to: string;
  @Input()
  set base(base: string | QtyModule.Qty) {
    this._base = typeof base === 'string' ? Qty(base) : base;
    this.value = this.normalize(this._base).to(this.to).scalar;
  }

  constructor() { }

  ngOnInit() {

  }

  private normalize(base: QtyModule.Qty) {
    let speed = {
      norm: base.mul(1),
      space: base.units().split('/')[0],
      time: base.units().split('/')[1]
    };

    if (this.to.indexOf('round') > -1) {
      if (speed.time === 's') {
        speed.norm = base.mul(6);
      } else if (speed.time === 'h') {
        speed.norm = base.div(600);
      }
      this.to = this.to.replace('round', speed.time);
    } else if (this.to.indexOf('workday') > -1) {
      if (speed.time === 's') {
        speed.norm = base.mul(28800);
      } else if (speed.time === 'h') {
        speed.norm = base.mul(8);
      }
      this.to = this.to.replace('workday', speed.time);
    }

    return speed.norm;
  }

}
