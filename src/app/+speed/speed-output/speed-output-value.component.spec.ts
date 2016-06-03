import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SpeedOutputValueComponent } from './speed-output-value.component';

describe('Component: SpeedOutputValue', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SpeedOutputValueComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SpeedOutputValueComponent],
      (component: SpeedOutputValueComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(SpeedOutputValueComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SpeedOutputValueComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-speed-output-value></app-speed-output-value>
  `,
  directives: [SpeedOutputValueComponent]
})
class SpeedOutputValueComponentTestController {
}

