const savingCalculatorPage = require("../pageobjects/SavingCalculatorPage.js");
const homePage = require("../pageobjects/TelnyxHomePage.js");

describe("Verify saving calculator", () => {
  it("Should verify saving calculator with messaging API", async () => {
    await homePage.launchWebApp();
    await homePage.openSavingCalculatorPage();
    await savingCalculatorPage.chooseParams();
    await expect(savingCalculatorPage.possibleSavingsImg).toBeDisplayed();
  });
});
