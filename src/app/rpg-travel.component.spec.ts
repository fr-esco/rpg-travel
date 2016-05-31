import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RpgTravelAppComponent } from '../app/rpg-travel.component';

beforeEachProviders(() => [RpgTravelAppComponent]);

describe('App: RpgTravel', () => {
  it('should create the app',
      inject([RpgTravelAppComponent], (app: RpgTravelAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'rpg-travel works!\'',
      inject([RpgTravelAppComponent], (app: RpgTravelAppComponent) => {
    expect(app.title).toEqual('rpg-travel works!');
  }));
});
