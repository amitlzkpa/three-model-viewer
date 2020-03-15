/* eslint-disable @typescript-eslint/explicit-function-return-type */
import puppeteer from 'puppeteer';
import { PuppeteerHelper } from '../../testutil/puppeteerHelper';

const HEADLESS = true;
jest.setTimeout(30000);

/*
 NOTE that you must serve the demo page on port 3000 to make this test work
*/
describe('myhello component', () => {
  let browser;
  let page;
  let helper;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: HEADLESS,
      args: ['--disable-web-security'] // mainly to disable OPTIONS preflight
    });
    page = await browser.newPage();
    helper = new PuppeteerHelper(page, 'my-hello');
    await page.goto('http://localhost:3000/src/components/myhello/myhello.html');
  });

  afterEach(async () => {
    await browser.close();
  });

  it('Change to', async () => {
    // check the default
    await expect(await helper.textContentOf('div:nth-child(1)')).toEqual('Hello world!');

    await helper.setAttribute('to', 'Alan');
    await expect(await helper.textContentOf('div:nth-child(1)')).toEqual('Hello Alan!');
  });
});
