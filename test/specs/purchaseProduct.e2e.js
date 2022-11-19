const shoppingCartPage = require('../pageobjects/cart.page')
const shippingPaymentPage = require('../pageobjects/shippingPayment.page')
const signInPage = require('../pageobjects/signin.page')
const womenProductPage = require('../pageobjects/womenProduct.page')
const paymentPage = require('../pageobjects/payment.page')



describe('Purchasing a Product', async ()=> {

//#region hooks
    // before(()=> {
    //     console.log('This is the before hook. It runs ONCE befire the FIRST test in the describe block')
    // });
    // after(() => {
    //     console.log('This is the after hook. It runs ONCE after the LAST test in the decribe block.')
    // });
    // beforeEach(()=> {
    //     console.log('This is the beforeEach hook. It runs before EACH test in the describe block.')
    // });
    // afterEach(() => {
    //     console.log('This is the afterEach hook. It runs after EACH test in this describe block.')
    // });
//#endregion
//tests
    it('should checkout product for logged in user', async ()=>{
        await signInPage.open()
        await (signInPage.inputEmailField).waitForDisplayed();
        await signInPage.loginToLuma("test123@exampletest.com","Password1")
        await browser.url('https://magento.softwaretestingboard.com/women.html')
        await womenProductPage.hoodiesAndSweats.click()
        await womenProductPage.productItemLink.click()
        await womenProductPage.addItemToCart("4");
        //await expect(womenProductPage.successMessage).toHaveTextContaining('You added Circe Hooded Ice Fleece to your shopping cart.')
        await shoppingCartPage.open();
        await browser.url('https://magento.softwaretestingboard.com/checkout/cart/')
        await shoppingCartPage.proceedToCheckout();
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/#shipping');
        await shippingPaymentPage.selectBestwayShipping();
        //await paymentPage.open();
        //await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/#payment');
        await paymentPage.placeOrderButton.click();
        console.log('the broswer hangs here but I am not sure why');
        await expect(paymentPage.orderSuccessMessage).toHaveText('Thank you for your purchase!')

    })
})