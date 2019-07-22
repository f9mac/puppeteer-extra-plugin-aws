/* eslint-env node, mocha */
const assert = require('assert');
const puppeteer = require('puppeteer-extra');
const pluginAWS = require('../src');

describe('PuppeteerExtraPluginAWS', () => {
  // reset the plugins to a clean slate for each test
  beforeEach(() => (puppeteer._plugins = []))

  it('works', async () => {
    const plugin = pluginAWS();
    puppeteer.use(plugin);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
      await page.goto('http://example.org', {waitUntil: 'domcontentloaded'});
      assert.equal(plugin.opts.args.every(arg => browser._process.spawnargs.includes(arg)), true);
    } catch (e) {
      browser.close();
      throw e
    }

    browser.close();
  }).timeout(10000);
});
