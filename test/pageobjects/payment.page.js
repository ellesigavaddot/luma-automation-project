
const Page = require('../pageobjects/page')

class paymentPage extends Page{

    get placeOrderButton(){
        return $('button=Place Order')
    }

    get orderSuccessMessage(){
        return $('h1.page-title')
    }


    async finalPlaceOrder(){
        return this.placeOrderButton.click();
    }


    open(){
        return super.open('checkout/#payment');
    }


}
module.exports = new paymentPage();