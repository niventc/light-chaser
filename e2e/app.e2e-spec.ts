import { LightChaserPage } from './app.po';

describe('light-chaser App', function() {
  let page: LightChaserPage;

  beforeEach(() => {
    page = new LightChaserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
