const Page = require('../pageobjects/page')

class CartPage extends Page{
    


    open () {
        return super.open('checkout/cart/');
    }

}
module.exports = new CartPage();