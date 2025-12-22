const { chromium } = require('playwright');

let browser;
let context;
let page;

const browserConfig = {
  headless: process.env.HEADLESS !== 'false',
  args: ['--start-maximized']
};

before(async function() {
  this.timeout(30000);
  browser = await chromium.launch(browserConfig);
  context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  page = await context.newPage();

  global.page = page;
  global.context = context;
  global.browser = browser;
});

after(async function() {
  if (browser) {
    await browser.close();
  }
});

afterEach(async function() {
  if (this.currentTest.state === 'failed') {
    const screenshotPath = `./test-results/screenshots/${this.currentTest.title.replace(/[^a-z0-9]/gi, '_')}.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });
  }
});
