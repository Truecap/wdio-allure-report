const homePage = require("../pageobjects/TelnyxHomePage.js");

describe("Verify search input on blog page", () => {
  it("Should click on blog button on the resources drop down menu and enter Number pool to search input", async () => {
    await homePage.launchWebApp();
    await homePage.openBlogPage();
    await homePage.find();
    await expect(browser).toHaveUrlContaining(
      "/search?q=number%20pool"
    );
  });
});
