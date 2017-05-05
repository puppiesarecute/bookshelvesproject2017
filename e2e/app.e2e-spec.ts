import { BookshelvesprojectPage } from './app.po';

describe('bookshelvesproject App', () => {
  let page: BookshelvesprojectPage;

  beforeEach(() => {
    page = new BookshelvesprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
