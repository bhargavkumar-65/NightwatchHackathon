module.exports = {
  
    before : function(browser) {
        console.log('...STARTING ASSERTIONS TEST...');
      },
    
      after : function(browser) {
        console.log('...ENDING ASSERTIONS TEST...');
      },

    '@tags': ['Telus'],
    '@disabled': false,
    'Testing Different Assertions Functionality' : function (browser) {
        const wait_time = 20000;  
        const home_page = browser.page.telushome_page_Objects();
        const assertionspage = browser.page.assertionspom();
        home_page
            .navigate()
            .maximizeWindow()
            .verify.urlContains('en/') //Using verify Instead of .assert to just log the failure and continue
            .verify.not.urlContains('ens/')
            .waitForElementVisible('@BusinessTab',40000)
            .linkclick('@BusinessTab')
            .pause(3000)
            .linkclick('@SmallBusinessTab')
            .assert.urlEquals('https://www.telus.com/en/')
            .assert.titleContains('TELUS')
            .expect.cookie('AAMC_telus_0').to.contain('REGION%7C12')
          home_page    
            .verifytxt('@offerButton','View offer')
            .verifylinks('@offerlink','whole-home-offer')
            .verifytxt('@loginButton','Log in')
            .verifylinks('@loginlink','login')
       //     .verify.element('.czBJsN.Heading__StyledHeading-mpz92r-0:nth-of-type(1)').text.to.startWith('Save up to $2,040')
            .waitForElementVisible('@InternetMenu',20000, false, function() {}, 'element not present ')
            .verify.visible({selector: '#main-nav-list-item-1', supressNoSuchElementError: true})
            .waitForElementVisible('@BusinessTab',40000)
            .linkclick('@BusinessTab')
            .pause(3000)
            .linkclick('@SmallBusinessTab')
            .expect.cookie('aa_lastProductViewed').to.contain('business/small') /*Validating Last Product Viewed Cookie */

        assertionspage
            .assert.not.visible('@HiddenElement')
            .expect.element('@HiddenElement').not.to.be.visible /* Same as assert.not.visible */
       /* .expect.element('@HiddenElement').not.to.be.visible.to.have.css('.fsbrBF.sc-fONwsr').which.equals('.fsbrBF.sc-fONwsr') */
            .end()
            


    }
};