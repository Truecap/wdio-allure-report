const homePage = require("../pageobjects/TelnyxHomePage.js");

describe("Verify tabs on home page without login", () => {

  it("should open pop-upwindow pricing", async () => {
    await homePage.launchWebApp();
    await homePage.openPricingDrpDwn();
    await expect(homePage.smsApiPricingDrpDwn).toBeDisplayed();
  });

  it("should open pop-upwindow solutions", async () => {
    await homePage.launchWebApp();
    await homePage.openSolutionsDrpDwn();
    await expect(homePage.contactCenterBtnSolutionsDrpDwn).toBeDisplayed();
  });
  it("should open pop-upwindow resources", async () => {
    await homePage.launchWebApp();
    await homePage.openResourcesDrpDwn();
    await expect(homePage.blogBtnResorcesDrpDwn).toBeDisplayed();
  });
  it("should open pop-upwindow company", async () => {
    await homePage.launchWebApp();
    await homePage.openCompanyDrpDwn();
    await expect(homePage.elementsCompanyTab).toBeDisplayed();
  });
  it("should open pop-upwindow products", async () => {
    await homePage.launchWebApp();
    await homePage.openProductTab();
    await expect(homePage.elementsProductTab).toBeDisplayed();
  });

  it("should click on network tab and redirected to network page", async () => {
    await homePage.launchWebApp();
    await homePage.clickNetworklink();
    await expect(browser).toHaveUrlContaining('/global-ip-network')
  });
});
