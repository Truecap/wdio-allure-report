const logInPage = require("../pageobjects/LogInPage.js");

describe("Login negative tests", () => {
  it("Login with invalid email", async () => {
    await logInPage.launchWebApp();
    await logInPage.logInInvalidEmail();
    await logInPage.validateLoginError();
  });
  it("Login with invalid password", async () => {
    await logInPage.launchWebApp();
    await logInPage.loginInvalidPassword();
    await logInPage.validateLoginError();
  });
});
