class ContactCenterPage {
  get phoneCallsButton() {
    return $('//*[text()= "Explore Elastic SIP Trunking"]');
  }
  async clickPhoneCallsBtn() {
    await this.phoneCallsButton.scrollIntoView();
    await this.phoneCallsButton.click();
  }
  async validatePhoneCallsButton() {
    await expect(browser).toHaveUrl("https://telnyx.com/products/sip-trunks");
  }
  get textMessagesButton() {
    return $('//*[text()= "Explore SMS API"]');
  }
  async clickMessagesBtn() {
    await this.textMessagesButton.click();
  }
  async validateTextMessagesButton() {
    await expect(browser).toHaveUrl("https://telnyx.com/products/sms-api");
  }
  get browserBasedCommsButton() {
    return $('//*[text()= "Explore WebRTC"]');
  }
  async clickBrowserBasedBtn() {
    await this.browserBasedCommsButton.click();
  }
  async validateBassedCommsButton() {
    await expect(browser).toHaveUrl("https://telnyx.com/products/webrtc");
  }
}
module.exports = new ContactCenterPage();
