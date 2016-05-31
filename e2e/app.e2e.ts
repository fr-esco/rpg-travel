import { RpgTravelPage } from './app.po';

describe('rpg-travel App', function() {
  let page: RpgTravelPage;

  beforeEach(() => {
    page = new RpgTravelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rpg-travel works!');
  });
});
