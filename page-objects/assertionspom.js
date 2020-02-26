module.exports = {
    url: 'https://www.telus.com/en/',
    elements: {

        cssProperty:'html[lang="en"]',
        domProperty:'.eorkqv.sc-fMiknA>a',
        HiddenElement:'div[aria-hidden="true"]:first-of-type',
        SmallBusinessTab:'a[class="sc-kEYyzF sc-caSCKo gVMHEn"]:nth-of-type(1)',
        BusinessTab:'a[data-di-id="di-id-347c04e5-5af71c37"]',

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