class PricingPage {
  get pricingContryDrpDwn() {
    return $('[class*="Forms_labe"]');
  }
  get ukraineFromDrpDwn() {
    return $('//*[text() ="Ukraine"]');
  }
  get voiceTab() {
    return $('[class="Tabs_tabBar-tx-Z1YGn9J"]>div:nth-of-type(1)');
  }
  get priceLocalMobileVoiceTabUa() {
    return $('(//*[text() ="€0.0068 (EUR)" and @class="tx-Z6gF6n"])[1]');
  }
  async validateVoiceTab() {
    await this.priceLocalMobileVoiceTabUa.isDisplayed();
  }
  get numbersTab() {
    return $('[class="Tabs_tabBar-tx-Z1YGn9J"]>div:nth-of-type(2)');
  }
  get priceStandart10DigitNumberNumbersTabUa() {
    return $('(//*[text() ="€4.25 (EUR)" and @class="tx-Z6gF6n"])[1]');
  }
  async validateNumbersTab() {
    await this.priceStandart10DigitNumberNumbersTabUa.isDisplayed();
  }
  get messagingTab() {
    return $('[class="Tabs_tabBar-tx-Z1YGn9J"]>div:nth-of-type(3)');
  }
  get messageMessagingTabUa() {
    return $('[class*="text-lighter"]');
  }
  async validateMessagingTab() {
    await this.messageMessagingTabUa.isDisplayed();
  }
  get telcoDataTab() {
    return $('[class="Tabs_tabBar-tx-Z1YGn9J"]>div:nth-of-type(4)');
  }
  get cnamPriceTelconDataTabUa() {
    return $('[class="List_item-tx-2p1LWU"]:nth-of-type(1)');
  }
  async validateTelcoDataTab() {
    await this.cnamPriceTelconDataTabUa.isDisplayed();
  }
  get networkingTab() {
    return $('[class="Tabs_tabBar-tx-Z1YGn9J"]>div:nth-of-type(5)');
  }
  get amazonWebServicePriceNetworkingTabUa() {
    return $('(//*[text() = "€85.00" and @class="tx-Z6gF6n"])[1]');
  }
  async validateNetworkingTab() {
    await this.amazonWebServicePriceNetworkingTabUa.isDisplayed();
  }
}
module.exports = new PricingPage();
