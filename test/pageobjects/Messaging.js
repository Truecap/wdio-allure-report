class MessagingPage {
  get countryDrpDwn() {
    return $('//*[@class="sc-ecffda1a-4 dCDohY"][1]');
  }
  get currencyDrpDwn() {
    return $('//*[@class="sc-ecffda1a-4 dCDohY"][2]');
  }
  get ukraineFromDrpDwn() {
    return $('[href="/pricing/messaging/ua"]');
  }
  get textMessages() {
    return $("//*[text() = 'Text messages (SMS)']");
  }
  get priceSmsUaUsd() {
    return $("//*[text() = '$0.104']");
  }
  get priceSmsUaEur() {
    return $("//*[text() = '€0.103']");
  }
  get euroFromDrpDwnCurrency() {
    return $('//div[text() ="EUR"]');
  }
  async chooseEuro() {
    await this.currencyDrpDwn.click();
    await this.euroFromDrpDwnCurrency.click();
    await this.priceSmsUaEur.waitForDisplayed();
  }
  async chooseUkraine() {
    await this.countryDrpDwn.click();
    await this.ukraineFromDrpDwn.click();
    await this.priceSmsUaUsd.waitForDisplayed();
  }
}
module.exports = new MessagingPage();
