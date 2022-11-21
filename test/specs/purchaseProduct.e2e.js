const shoppingCartPage = require('../pageobjects/cart.page')
const shippingPaymentPage = require('../pageobjects/shippingPayment.page')
const signInPage = require('../pageobjects/signin.page')
const womenProductPage = require('../pageobjects/womenProduct.page')
const paymentPage = require('../pageobjects/payment.page')
const orderPage = require('../pageobjects/orders.page')




describe('Purchasing a Product', async ()=> {

    it('should checkout product for logged in user', async ()=>{
        await signInPage.open()
        await (signInPage.inputEmailField).waitForDisplayed();
        await signInPage.loginToLuma("test123@exampletest.com","Password1")
        await browser.url('https://magento.softwaretestingboard.com/women.html')
        await womenProductPage.hoodiesAndSweats.click()
        await womenProductPage.productItemLink.click()
        await womenProductPage.addItemToCart("4");
        await shoppingCartPage.open();
        await browser.url('https://magento.softwaretestingboard.com/checkout/cart/')
        await shoppingCartPage.proceedToCheckout();
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/#shipping');
        await shippingPaymentPage.selectBestwayShipping();
        await paymentPage.placeOrderButton.waitForDisplayed();
        await paymentPage.finalPlaceOrder();
        await expect(paymentPage.orderSuccessMessage).toHaveText('Thank you for your purchase!');
    })

    it('should verify order purchase', async () => {
        await orderPage.orderNumber.waitForDisplayed();
        const orderNum = await orderPage.orderNumber.getText();
        await browser.url('https://magento.softwaretestingboard.com/customer/account/')
        await orderPage.clickOrderMenu();
        await expect (orderPage.pageHeader).toHaveTextContaining('My Orders');
        await orderPage.recentOrder.waitForDisplayed();
        //const orderNumTxt =  orderPage.recentOrder.getText();
        await expect(orderPage.recentOrder).toHaveTextContaining(orderNum)
    })



})

