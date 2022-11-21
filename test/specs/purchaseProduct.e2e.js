const shoppingCartPage = require('../pageobjects/cart.page')
const shippingPaymentPage = require('../pageobjects/shippingPayment.page')
const signInPage = require('../pageobjects/signin.page')
const womenProductPage = require('../pageobjects/womenProduct.page')
const paymentPage = require('../pageobjects/payment.page')
const orderPage = require('../pageobjects/orders.page')
const { faker } = require('@faker-js/faker')



describe('Purchasing a Product', async ()=> {
    it.skip('should checkout product for logged in user', async ()=>{
        await browser.url('https://magento.softwaretestingboard.com/')
        await womenProductPage.hoodiesAndSweats.click()
        await womenProductPage.productItemLink.click()
        await womenProductPage.addItemToCart("1");
        // const cartLink = $('a.showcart')
        // const cartPopOpen = $('#ui-id-1')
        // await expect($('span.counter')).toExist();
        // await expect(womenProductPage.successMessage).toExist();
        // await cartLink.click();
        // await expect(cartPopOpen).toBeDisplayedInViewport();
        // const headToCheckout = $('#top-cart-btn-checkout');
        // await headToCheckout.click();
        const successMessage = $('div.message-success a')
        await successMessage.waitForDisplayed();
        await successMessage.scrollIntoView();
        await successMessage.click();
        //await browser.url('https://magento.softwaretestingboard.com/checkout/cart/')
        const proceedToCheckoutButton = $('[data-role="proceed-to-checkout"]')
        await proceedToCheckoutButton.waitForDisplayed()
        await proceedToCheckoutButton.click();
        const shippingMethod = $('[name="ko_unique_2"]');
        await shippingMethod.click();
        const nextFromShipping = $('button.continue')
        await nextFromShipping.scrollIntoView();
        await nextFromShipping.waitForClickable();
        await nextFromShipping.waitForDisplayed();
        await nextFromShipping.click();
        //await expect(browser).toHaveUrlContaining('#payment')
        // const checkboxPaymentOrder = $('#billing-address-same-as-shipping-checkmo')
        // await expect(checkboxPaymentOrder).toBeChecked();
        // const orderSummary = $('div.block.items-in-cart > div')
        // await orderSummary.waitForClickable();
        const placeOrderButton = $('button.checkout');
        await placeOrderButton.waitForClickable();
        await placeOrderButton.waitForDisplayed();
        await placeOrderButton.waitForEnabled();
        await placeOrderButton.scrollIntoView();
        // await expect(placeOrderButton).toBeClickable();
        // await expect(placeOrderButton).toBeExisting();
        await placeOrderButton.click();
        await browser.debug()
    })

    // it.skip('should purchase product for user without account', async () => {
    //     await browser.url('https://magento.softwaretestingboard.com/');
    //     const menuWomen = $('li.nav-2 > a')
    //     await menuWomen.waitForDisplayed();
    //     await menuWomen.click();
    //     const hotSellerTitle = $('h2.title');
    //     await hotSellerTitle.scrollIntoView();
    //     const hotSellerProduct = $('//a[@title="Radiant Tee" or text()="Radiant Tee"]');
    //     await hotSellerProduct.waitForDisplayed();
    //     await hotSellerProduct.click();
    //     const smallSize = $('[option-id="167"]')
    //     const purpleColor = $('[option-id="57"]')
    //     const addToCartButton = $('#product-addtocart-button')
    //     const successMessage = $('div.messages a')
    //     await smallSize.click();
    //     await purpleColor.click();
    //     await addToCartButton.click();
    //     await successMessage.waitForDisplayed();
    //     await successMessage.click();
    //     const proceedToCheckout = $('[data-role="proceed-to-checkout"]');
    //     await proceedToCheckout.waitForDisplayed();
    //     await proceedToCheckout.click();
    //     // Shipping address page
    //     const inputEmail = $('div.control._with-tooltip > input[type="email"]');
    //     await inputEmail.setValue(faker.internet.email());
    //     const inputFirstname = $('[name="firstname"]');
    //     const inputLastname = $('[name="lastname"]');
    //     const inputCompanyName = $('[name="company"]');
    //     const inputStreetName= $('[name="street[0]"]');
    //     const inputCity = $('[name="city"]');
    //     const dropdownState = $('')
    //     const inputZipcode = $('[name="postcode"]')
    //     const dropdownCountry = $('')
    //     const inputPhonenumber = $('[name="telephone"]')
    //     const radioBestShipping = $('[name="ko_unique_2"]')
    //     await inputFirstname.setValue(faker.name.firstName())

    // })

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
        //await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/#payment')
        await paymentPage.placeOrderButton.waitForDisplayed();
        await paymentPage.finalPlaceOrder();
        await expect(paymentPage.orderSuccessMessage).toHaveText('Thank you for your purchase!');
        //get order number
    })

    it('should verify order purchase', async () => {
        const orderNum = await orderPage.orderNumber.getText();
        await browser.url('https://magento.softwaretestingboard.com/customer/account/')
        await orderPage.clickOrderMenu();
        await expect (orderPage.pageHeader).toHaveTextContaining('My Orders');
        const orderNumTxt =  orderPage.recentOrder.getText();
        await expect(orderNumTxt).toEqual(orderNum)

    })



})

