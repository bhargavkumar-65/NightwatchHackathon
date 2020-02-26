module.exports = {
    url: 'https://www.telus.com/en/',
    elements: {

        offerButton: '.card__link--item',
        offerlink: '.card__link--container>.card__link--item>span>a',
        loginButton: '.ZLeNp.sc-cHGsZl',
        loginlink: '.cKJgJO.sc-kEYyzF.sc-kjoXOD',
        SmallBusinessTab:'a[class="sc-kEYyzF sc-caSCKo gVMHEn"]:nth-of-type(1)',
        BusinessTab:'a[data-di-id="di-id-347c04e5-5af71c37"]',
        InternetMenu: '#main-nav-list-item-1', //'.fwzyFw.sc-ktHwxA',
        //Internet_plus_tvplan:'#main-nav-list-item-1,div[aria-hidden="false"],.gJpIGf.sc-qrIAp>div>div>div>div>div>ul>li:nth-of-type(3)',
        Internet_plus_tvplan:'#header-container > div.sc-gwVKww.fmShgA > div > div > div.sc-tilXH.jGFpkr > ul > li:nth-child(2) > div > div > div > div > div.sc-eNQAEJ.doFReb > div:nth-child(1) > ul > li:nth-child(3) > a',
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