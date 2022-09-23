const homePage = require("../pageobjects/TelnyxHomePage.js");

describe("Verify home page button", () => {
  it("Should click about us button then home page button", async () => {
    await homePage.launchWebApp();
    await homePage.openAboutUsPage();
    await homePage.clickHomePageBtn();
    await expect(homePage.homePagePicture).toBeDisplayed();
   
  });
});
