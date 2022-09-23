class ContactCenterPage {
  get phoneCallsButton() {
    return $('//*[text()= "Explore Elastic SIP Trunking"]');
  }
  get phoneCallsHeader() {
    return $("h1>span");
  }
  async clickPhoneCallsBtn() {
    await this.phoneCallsButton.scrollIntoView();
    await this.phoneCallsButton.click();
  }
  async validatePhoneCallsButton() {
    await expect(this.phoneCallsHeader).toBeDisplayed();
    await expect(this.phoneCallsHeader).toHaveText(
      "SIP Trunking for instant, unlimited global scale."
    );
  }
  get textMessagesButton() {
    return $('//*[text()= "Explore SMS API"]');
  }
  get textMessagesHeader() {
    return $("h1>span");
  }
  async clickMessagesBtn() {
    await this.textMessagesButton.click();
  }
  async validateTextMessagesButton() {
    await expect(this.textMessagesHeader).toBeDisplayed();
    await expect(this.textMessagesHeader).toHaveText("SMS API");
  }
  get browserBasedCommsButton() {
    return $('//*[text()= "Explore WebRTC"]');
  }
  get browserBasedCommsHeader() {
    return $("h1>span");
  }
  async clickBrowserBasedBtn() {
    await this.browserBasedCommsButton.click();
  }
  async validateBassedCommsButton() {
    await expect(this.browserBasedCommsHeader).toBeDisplayed();
    await expect(this.browserBasedCommsHeader).toHaveText(
      "WebRTC for real-time, contextual communications"
    );
  }
}
module.exports = new ContactCenterPage();
