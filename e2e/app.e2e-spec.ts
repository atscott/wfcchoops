import { WfcchoopsNgcliPage } from './app.po';

describe('wfcchoops-ngcli App', function() {
  let page: WfcchoopsNgcliPage;

  beforeEach(() => {
    page = new WfcchoopsNgcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
