/* module.exports = {
    '@tags': ['Telus'],
    '@disabled': false,
    'Telus Home Page : Verify Home Screen'(browser) {
           
        const page = browser.page.Internet_PLUS_TV_Objects();
        page
            .linkclick('@getstartedbtn')
            .entertext('enterstreetname','Montrose Ave, Abbotsford, BC, Canada')
            .saveScreenshot('tests_output/this2.png')
    }
}; */