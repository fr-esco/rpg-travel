export class RpgTravelPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rpg-travel-app h1')).getText();
  }
}
