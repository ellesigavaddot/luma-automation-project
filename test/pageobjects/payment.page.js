const Page = require('../pageobjects/page')

class paymentPage extends Page{

    get placeOrderButton(){
        return $('button.checkout')
    }

    get orderSuccessMessage(){
        return $('h1.page-title')
    }


    async finalPlaceOrder(){
        await this.placeOrderButton.click();
    }



    

    open(){
        return super.open('checkout/#payment');
    }


}
module.exports = new paymentPage();