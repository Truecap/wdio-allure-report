const homePage = require("../pageobjects/TelnyxHomePage.js");
const BasePage = require('./BasePage')
// import {BasePage} from './BasePage';
const email = "testsne13@gmail.com";
const password = "Test1234test!";
const invalidEmail = "someemail@gmail.com";
const invalidPassword = "12345";

class LoginPage extends BasePage {
  get emailInput() {
    return $('form>div>div input[name="email"]');
  }
  get passwordInput() {
    return $('form>div>div input[name="password"]');
  }
  get submitButton() {
    return $('button[class*="LoginForm__LoginButton"]');
  }
  get errorMessage() {
    return $('[class*="ilxvtf"]');
  }
  async logInInvalidEmail() {
    await homePage.logInBtn.click();
    await this.emailInput.addValue(invalidEmail);
    await this.passwordInput.addValue(password);
    await this.submitButton.click();
  }
  async loginInvalidPassword() {
    await homePage.logInBtn.click();
    await this.emailInput.addValue(email);
    await this.passwordInput.addValue(invalidPassword);
    await this.submitButton.click();
  }
  async validateLoginError() {
    await this.errorMessage.isDisplayed();
  }
}
module.exports = new LoginPage();
