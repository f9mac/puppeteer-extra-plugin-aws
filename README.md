# puppeteer-extra-plugin-aws

> A plugin for [puppeteer-extra](https://github.com/berstend/puppeteer-extra) to run puppeteer on AWS infrastructure like ECS or EC2. (Might also work on Lambda)

## Install

```bash
yarn add puppeteer-extra-plugin-aws
# - or -
npm install puppeteer-extra-plugin-aws
```

If this is your first [puppeteer-extra](https://github.com/berstend/puppeteer-extra) plugin here's everything you need:

```bash
yarn add puppeteer puppeteer-extra puppeteer-extra-plugin-aws
# - or -
npm install puppeteer puppeteer-extra puppeteer-extra-plugin-aws
```

## Usage

```js
// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra');
// require AWS plugin
const awsPlugin = require('puppeteer-extra-plugin-aws');
// add AWS plugin
puppeteer.use(awsPlugin());

// puppeteer usage as normal
puppeteer.launch({ headless: true }).then(async browser => {
  const page = await browser.newPage()
  await page.setViewport({ width: 800, height: 600 })
  // will work on AWS
  await page.goto("https://example.com")
  await page.waitFor(5000)
  await browser.close()
})
```

For more info [see the tests](./test/test.js).
