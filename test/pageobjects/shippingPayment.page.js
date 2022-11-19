

const Page = require('../pageobjects/page')

class shippingPaymentPage extends Page{

    get radioFixedShippingMethod(){
        return $('[value="flatrate_flatrate"]')
    }

    get radioTableShippingMethod(){
        return $('[value="tablerate_bestway"]')
    }

    get nextShippingButton(){
        return $('button.button.action.continue.primary')
    }

    // get buttonPlaceOrder(){
    //     return $('div.primary > button.checkout')
    // }

    // get orderSuccessMessage(){
    //     return $('h1.page-title')
    // }

    async selectBestwayShipping(){
        await this.radioTableShippingMethod.click();
        await this.nextShippingButton.click();
    }


    


    open(){
        return super.open('checkout/#shipping');
    }

}
module.exports = new shippingPaymentPage()