class SavingCalculatorPage {
  get messagingApiBtn() {
    return $("//*[text() ='Messaging API']");
  }
  get continueButton() {
    return $("main div>button.hBNXWZ");
  }
  get localNumbersInput() {
    return $("#local-numbers");
  }
  get tollFreeNumbersInput() {
    return $("#toll-free-numbers");
  }
  get possibleSavingsImg() {
    return $("[class='sc-1d1c658f-0 iHDmXz']");
  }
  async chooseParams() {
    await this.messagingApiBtn.click();
    await this.continueButton.click();
    await this.localNumbersInput.setValue("1");
    await this.tollFreeNumbersInput.setValue("1");
    await this.continueButton.click();
  }
  async validateSavingCalculator() {
    await this.possibleSavingsImg.isDisplayed();
  }
}
module.exports = new SavingCalculatorPage();
