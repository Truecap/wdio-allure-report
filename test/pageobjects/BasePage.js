class BasePage {
  get closeButtonCookie() {
    return $('[aria-label="close and deny"]~div>div>button');
  }
  async launchWebApp() {
    await browser.url("https://telnyx.com/");
    await browser.setWindowSize(1920, 1080);
    if (await this.closeButtonCookie.isDisplayed()) {
      await this.closeButtonCookie.click();
    }
  }
}
module.exports = BasePage;
