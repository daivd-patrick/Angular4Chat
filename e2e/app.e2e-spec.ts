import { MyChatPage } from './app.po';

describe('my-chat App', () => {
  let page: MyChatPage;

  beforeEach(() => {
    page = new MyChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
