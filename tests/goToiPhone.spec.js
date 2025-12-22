const { expect } = require('chai');
const AppleHomePageClass = require('../pages/ApplePage');

describe('Select "iPhone" from apple.com', function() {
  let AppleHomePage;

  beforeEach(async function() {
    // Create instance with page object
    AppleHomePage = new AppleHomePageClass(page);
    // Navigate before each test
    await page.goto('https://www.apple.com');
  });

  it('should have correct title', async function() {
    const title = await page.title();
    expect(title).to.include('Apple');
  });

  it('can select iPhone', async function() {
    await AppleHomePage.goToiPhone();
    await AppleHomePage.page.waitForLoadState('networkidle');
  });

  it('should navigate to Mac page', async function() {
    await AppleHomePage.goToMac();
    await AppleHomePage.page.waitForLoadState('networkidle');
    await page.waitForURL('https://www.apple.com/mac/');
    await page.pause();
  })

});