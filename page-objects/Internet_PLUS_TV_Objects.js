module.exports = {
elements: {
getstartedbtn : 'a[data-di-id="di-id-e50931a4-b1b4a8ac"]',
streetnametxtfield: '#autocomplete-form-address-google', //Montrose Ave, Abbotsford, BC, Canada
checkavaiabilitybtn:'#autocomplete-form-submit .iHJpOu.Button__ButtonTextWrapper-sa7xo3-1',
continue_checkavaiability:'#manual-form-submit',
//offer_Optik_Essentials_Internet_75:'[class="style__OfferGrid-sc-1ad47ew-1 dqxXjl"] > [class="style__OfferGridItem-sc-1ad47ew-0 jBXxXb"]:nth-child(4) [data-di-id="di-id-43a7dc6d-ebe3a31d"] > span:nth-child(1)',
offer_Optik_Essentials_Internet_75: 'div[data-testid="offers-grid"] > div:nth-of-type(4)  a[data-di-id="di-id-43a7dc6d-ebe3a31d"]',
verifyoffername:'//h1[contains(text(),"Optik Essentials & Internet 75")]',
optik75_check_availability:'.jzOeLA.columnBox.sc-cSHVUG.columnBox > div > a:first-of-type',
optik75textverify:'//h1[text()="Optik Essentials & Internet 75"]',
addoptik_75_to_cart:'//button[text()="Add to cart"]',
skipstep_button:'//a[text()="Skip this step"]',
how_many_tvs:'option[value="2"]',
},

commands: [{
    linkclick(selector){
        return this
        .click(selector);
    },
    entertext(selector,text){
return this
.setValue(selector,text);

    },
    verifytxt(selector,text){
        return this
        .assert.containsText(selector,text)
    },
    verifylinks(selector,linktext){
        return this            
        .assert.attributeContains(selector,'href',linktext)
    }


}]


};