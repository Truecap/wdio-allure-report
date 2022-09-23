

class HomePage {
  
  get logInBtn() {
    return $('[id="dialogAudio"] +a +a');
  }
  async clickLoginButton() {
    await this.logInBtn.click()
  }
  get closeButtonCookie() {
    return $('[aria-label="close and deny"]~div>div>button');
  }
  //pricingTab
  get pricingTab() {
    return $('[class*="khahzD"]:last-of-type');
  }
  async openPricingDrpDwn() {
    await this.pricingTab.moveTo();  
  }
  
  get smsApiPricingDrpDwn() {
    return $('header [href="/pricing/messaging"]');
  }
  async openMessagingPage() {
    await this.pricingTab.moveTo();
    await this.smsApiPricingDrpDwn.click();
    await expect(browser).toHaveUrl('https://telnyx.com/pricing/messaging')
  }
  //solutionstab
  get solutionsTab() {
    return $('[class*="khahzD"]:nth-of-type(2)');
  }
  async openSolutionsDrpDwn() {
    await this.solutionsTab.moveTo();
  }
  get elementsSolutionsTab() {
    return $('header .mchNoDecorate[href*="/solutions/"]');
  }
  get contactCenterBtnSolutionsDrpDwn() {
    return $('[href="/use-cases/contact-center"]');
  }
  async openContactCenterPage() {
    await this.openSolutionsDrpDwn();
    await this.contactCenterBtnSolutionsDrpDwn.click();
    await expect(browser).toHaveUrl('https://telnyx.com/use-cases/contact-center');
  }
  //resourceTab
  get resourcesTab() {
    return $('[class*="khahzD"]:nth-of-type(4)');
  }
  async openResourcesDrpDwn() {
    await this.resourcesTab.moveTo();
  }
  get savingCalculatorBtnResourcesDrpDwn() {
    return $('[href="/twilio-pricing-calculator"]');
  }
  async openSavingCalculatorPage() {
    await this.openResourcesDrpDwn();
    await this.savingCalculatorBtnResourcesDrpDwn.click();
  }
  get blogBtnResorcesDrpDwn() {
    return $('header .mchNoDecorate[href="/resources"]');
  }
  async openBlogPage() {
    await this.openResourcesDrpDwn();
    await this.blogBtnResorcesDrpDwn.click();
    await expect(browser).toHaveUrl('https://telnyx.com/resources')

  }
  //companyTab
  get companyTab() {
    return $('[class*="khahzD"]:nth-of-type(5)');
  }
  async openCompanyDrpDwn() {
    await this.companyTab.moveTo();
  }
  get elementsCompanyTab() {
    return $('header .mchNoDecorate[href*="/company/"]');
  }
  //productsTab
  get productTab() {
    return $('[class*="khahzD"]:nth-of-type(1)');
  }
  async openProductTab() {
    await this.productTab.moveTo();
  }
  get elementsProductTab() {
    return $('header .mchNoDecorate[href*="/products/"]');
  }
  //networkTab
  get networkTab() {
    return $('[class*="khahzD"]:nth-of-type(3)');
  }
  async clickNetworklink() {
    await this.networkTab.click();
  }
  get headerOnNetworkPage() {
    return $('h1[class*="clNvhv gVIlze"]');
  }
  
  
  get footerAboutUsBtn() {
    return $('//*[text()= "About Us"]');
  }
  get aboutUsHeader() {
    return $('[class*="clUAcO"]');
  }
  get homePagebutton() {
    return $('[id*="Logo"]');
  }
  async clickHomePageBtn() {
    await this.homePagebutton.click();
  }
  get homePagePicture() {
    return $('main>div');
  }

  get searchIpnutBlogPage() {
    return $('[type="search"]');
  }
  async find() {
    await this.searchIpnutBlogPage.addValue("number pool");
    await browser.keys("Enter");
  }
  
  async openAboutUsPage() {
    await this.footerAboutUsBtn.scrollIntoView();
    await this.footerAboutUsBtn.click();
    await expect(this.aboutUsHeader).toBeDisplayed();
  }
  async launchWebApp() {
    await browser.url('https://telnyx.com/');
    await browser.setWindowSize(1920, 1080);
    if (await this.closeButtonCookie.isDisplayed()) {
      await this.closeButtonCookie.click();
    }
  }

  
}
module.exports = new HomePage();
