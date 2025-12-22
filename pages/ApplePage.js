class AppleHomePage {
  constructor(page) {
    this.page = page;
    this.iPhone = '[aria-label="iPhone"]';
    this.iPad = '[aria-label="iPad"]';
    this.Mac = '[aria-label="Mac"]';
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async goToiPhone() {
    await this.page.click(this.iPhone);
    await this.page.waitForURL('https://www.apple.com/iphone/')
  }

  async goToiPad() {
    await this.page.click(this.iPad);
  }

  async goToMac() {
    await this.page.click(this.Mac);
  }

  async getErrorMessage() {
    return await this.page.textContent('.error-message');
  }
}

module.exports = AppleHomePage;