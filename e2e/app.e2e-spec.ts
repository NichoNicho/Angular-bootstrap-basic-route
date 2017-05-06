import { SimpleRoutePage } from './app.po';

describe('simple-route App', () => {
  let page: SimpleRoutePage;

  beforeEach(() => {
    page = new SimpleRoutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
