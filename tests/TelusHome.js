module.exports = {

    before : function(browser) {
        console.log('...STARTING TEST...');
      },
    
      after : function(browser) {
        console.log('...TEST EXECUTION ENDED...');
      },

    beforeEach : function(browser) {

    },
  
    afterEach : function(browser) {
  
    },
    '@tags': ['Telus'],
    '@disabled': false,
    'Telus Home Page : Verify Home Screen' : function (browser) {
        const wait_time = 20000;  
        const home_page = browser.page.telushome_page_Objects();
        home_page
            .navigate()
            .assert.urlContains('en/')
            .assert.titleContains('TELUS')
            .verifytxt('@offerButton','View offer')
            .verifylinks('@offerlink','whole-home-offer')
            .verifytxt('@loginButton','Log in')
            .verifylinks('@loginlink','login')
            .linkclick('@InternetMenu')
             //.verifytxt('@Internet_plus_tvplan','Internet + TV Plans')
             .waitForElementVisible('@Internet_plus_tvplan',20000)
            .expect.element('@Internet_plus_tvplan').to.be.enabled
        home_page
            .linkclick('@Internet_plus_tvplan')
            .saveScreenshot('tests_output/this2.png')
    },
    
    'TEST TWO: Check Offer Availability': '' +function (browser) {
        const Internet_plus_tv_page = browser.page.Internet_PLUS_TV_Objects();
        Internet_plus_tv_page
          /*   .waitForElementVisible('@getstartedbtn',40000)
            .linkclick('@getstartedbtn')
            .waitForElementVisible('@streetnametxtfield',40000)
            .entertext('@streetnametxtfield','Montrose Ave, Abbotsford, BC, Canada')
            .linkclick('@checkavaiabilitybtn')
            .waitForElementVisible('@continue_checkavaiability',40000)
            .linkclick('@continue_checkavaiability')
            .waitForElementVisible('@offer_Optik_Essentials_Internet_75',40000)
            .linkclick('@offer_Optik_Essentials_Internet_75') */
            .useXpath()
            .verifytxt('@verifyoffername','Optik Essentials & Internet 75')
//            .expect.cookie('cookie-name').to.contain('telus.demdex.net')

.useCss()
                .waitForElementVisible('@optik75_check_availability',4000)
                .linkclick('@optik75_check_availability')
                .waitForElementVisible('@streetnametxtfield',40000)
                .entertext('@streetnametxtfield','Montrose Ave, Abbotsford, BC, Canada')
                .linkclick('@checkavaiabilitybtn')
                .waitForElementVisible('@continue_checkavaiability',40000)
                .linkclick('@continue_checkavaiability')
               /*  .waitForElementVisible('@optik75textverify',40000)
                .verify.containsText('@optik75textverify','Optik Essentials & Internet 75') */
                .waitForElementVisible('@addoptik_75_to_cart',40000)
                .linkclick('@addoptik_75_to_cart')
                .waitForElementVisible('@skipstep_button',40000)
                .linkclick('@skipstep_button')
                .waitForElementVisible('@how_many_tvs',4000)
                .pause(30000)
                .saveScreenshot('tests_output/this3.png')
     }
     
};