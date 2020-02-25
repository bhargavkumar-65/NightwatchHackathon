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
            .assert.urlEquals('https://www.telus.com/en/')
            .assert.titleContains('TELUS')
            .verifytxt('@offerButton','View offer')
            .verifylinks('@offerlink','whole-home-offer')
            .verifytxt('@loginButton','Log in')
            .verifylinks('@loginlink','login')
            .waitForElementVisible('@InternetMenu',20000)
            .assert.visible({selector: '#main-nav-list-item-1', supressNoSuchElementError: true})
        assertionspage
        .assert.not.visible('@HiddenElement')
        .expect.element('@HiddenElement').not.to.be.visible // Same as assert.not.visible



    }
};