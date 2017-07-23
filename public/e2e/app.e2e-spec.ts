import { StoreTestPage } from './app.po';

describe('store-test App', () => {
  let page: StoreTestPage;

  beforeEach(() => {
    page = new StoreTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
