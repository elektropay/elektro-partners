import { AngularNetlifyPage } from './app.po';

describe('angular-netlify App', () => {
  let page: AngularNetlifyPage;

  beforeEach(() => {
    page = new AngularNetlifyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
