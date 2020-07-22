import { MiniProjectPage } from './app.po';

describe('mini-project App', () => {
  let page: MiniProjectPage;

  beforeEach(() => {
    page = new MiniProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
