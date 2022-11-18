//const mainPage = require('../pageobjects/main.page')
const womenProductPage = require('../pageobjects/womenProduct.page')
//const gearProductPage = require('../pageobjects/gearProduct.page')
const signInPage = require('../pageobjects/signin.page')


describe.only("Add Product to Cart", async () => {
    it('should add woman product to cart', async () =>{
       await signInPage.open()
       await signInPage.loginToLuma("test123@exampletest.com","Password1")
       await browser.url('https://magento.softwaretestingboard.com/women.html')
       await womenProductPage.hoodiesAndSweats.click()
       await womenProductPage.productItemLink.click()
       await womenProductPage.addItemToCart("4");
       await expect(womenProductPage.successMessage).toHaveTextContaining('You added Circe Hooded Ice Fleece to your shopping cart.')


    })
    // it('should add gear to cart', async() => {

    // })
})