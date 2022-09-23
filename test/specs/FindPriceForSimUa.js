const homePage = require("../pageobjects/TelnyxHomePage.js");
const messagingPage = require("../pageobjects/Messaging.js");

describe("Find price for SMS API for Ukraine", () => {
  it("Should to show price for SIM for Ukraine in usd", async () => {
    await homePage.launchWebApp();
    await homePage.openMessagingPage();
    await messagingPage.chooseUkraine();
    await expect(messagingPage.priceSmsUaUsd).toBeDisplayed();
  });

  it("Check if the price for SMS API for Ukrain will change in Euro.", async () => {
    await homePage.launchWebApp();
    await homePage.openMessagingPage();
    await messagingPage.chooseUkraine();
    await messagingPage.chooseEuro();
    await expect(messagingPage.priceSmsUaEur).toBeDisplayed();
  });
});
