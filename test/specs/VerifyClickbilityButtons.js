const contactCenterPage = require("../pageobjects/ContactCenterPage.js");
const homePage = require("../pageobjects/TelnyxHomePage.js");

describe("Verify clickability buttons", () => {
  it("Should verify clickability buttons on contact center page", async () => {
    await homePage.launchWebApp();
    await homePage.openContactCenterPage();
    await contactCenterPage.clickPhoneCallsBtn();
    await contactCenterPage.validatePhoneCallsButton();
    await browser.back();
    await contactCenterPage.clickMessagesBtn();
    await contactCenterPage.validateTextMessagesButton();
    await browser.back();
    await contactCenterPage.clickBrowserBasedBtn();
    await contactCenterPage.validateBassedCommsButton();
  });
});
