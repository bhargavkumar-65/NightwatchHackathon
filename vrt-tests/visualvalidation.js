//.RfTNa.sc-eNQAEJ a[data-di-id="di-id-8148ed7f-58b44f6b"]

module.exports = {
    'VRT1-Validate Telus LOGO'(browser) {
        const logoimage = '.khYKIO.sc-jKJlTe.sc-epnACN a[data-di-id="di-id-8148ed7f-58b44f6b"] img[alt="TELUS Logo"]';
        browser
            .maximizeWindow()
            .url('https://telus.com/')
            .waitForElementVisible(logoimage,40000)
            .assert.screenshotIdenticalToBaseline(logoimage, 'logo')
    },
    'VRT2-Validate Graffee Image'(browser) {
        const GiraffeeImg = 'img[alt="Giraffe Whole Home Offer"]';
        browser
            .url('https://telus.com/')
            .waitForElementVisible(GiraffeeImg,40000)
            .assert.screenshotIdenticalToBaseline(GiraffeeImg, 'Giraffee')
    },
    'VRT3-Validate GET STARTED BUTTON COLOUR'(browser) {
        const GetStartedBtn = '.iyApTw.Button__StyledButton-sa7xo3-0.sc-kGXeez';
        browser
            .url('https://telus.com/')
            .waitForElementVisible(GetStartedBtn,20000)
            .assert.screenshotIdenticalToBaseline(GetStartedBtn, 'GetStartBtn');
    }

};