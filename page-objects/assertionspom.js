module.exports = {
    url: 'https://www.telus.com/en/',
    elements: {

        cssProperty:'html[lang="en"]',
        domProperty:'.eorkqv.sc-fMiknA>a',
        HiddenElement:'div[aria-hidden="true"]:first-of-type',


    },
    commands: [{
        linkclick(selector){
            return this
            .click(selector);
        },
        verifylinks(selector,linktext){
            return this            
            .assert.attributeContains(selector,'href',linktext)
        },
        verifytxt(selector,text){
            return this
            .assert.containsText(selector,text)
        }

    }]
};