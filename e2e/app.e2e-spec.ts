import { BostonChineseFoodPage } from './app.po';

describe('boston-chinese-food App', () => {
  let page: BostonChineseFoodPage;

  beforeEach(() => {
    page = new BostonChineseFoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
