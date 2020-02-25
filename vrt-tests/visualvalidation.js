//.RfTNa.sc-eNQAEJ a[data-di-id="di-id-8148ed7f-58b44f6b"]

module.exports = {
    'Visual Regression Test1: Validate Telus LOGO'(browser) {
        const logoimage = '.khYKIO.sc-jKJlTe.sc-epnACN a[data-di-id="di-id-8148ed7f-58b44f6b"] img[alt="TELUS Logo"]';
        browser
            .url('https://telus.com/')
            .waitForElementVisible(logoimage,20000)
            .assert.screenshotIdenticalToBaseline(logoimage, 'logo');
    },
    'Visual Regression Test2: Validate Graffee Image'(browser) {
        const GiraffeeImg = 'img[alt="Giraffe Whole Home Offer"]';
        browser
            .url('https://telus.com/')
            .waitForElementVisible(GiraffeeImg,20000)
            .assert.screenshotIdenticalToBaseline(GiraffeeImg, 'Giraffee');
    },
    'Visual Regression Test3: Validate GET STARTED BUTTON COLOUR'(browser) {
        const GetStartedBtn = '.iyApTw.Button__StyledButton-sa7xo3-0.sc-kGXeez';
        browser
            .url('https://telus.com/')
            .waitForElementVisible(GetStartedBtn,20000)
            .assert.screenshotIdenticalToBaseline(GetStartedBtn, 'GetStartBtn');
    }

};