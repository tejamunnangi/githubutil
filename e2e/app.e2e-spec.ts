import { GithubrepoappPage } from './app.po';

describe('githubrepoapp App', () => {
  let page: GithubrepoappPage;

  beforeEach(() => {
    page = new GithubrepoappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
