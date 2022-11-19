
const Page = require('../pageobjects/page')

class CartPage extends Page{

    //locators on cart page
    
    get cartHeader(){
        return $('h1=Shopping Cart')
    }

    get checkoutButton(){
        return $('div.cart-summary > ul > li:nth-child(1) > button')
    }

    async proceedToCheckout(){
        await this.checkoutButton.click();
    }


    open () {
        return super.open('checkout/cart/');
    }

}
module.exports = new CartPage();