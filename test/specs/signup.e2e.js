const signupPage = require("../pageobjects/signup.page")
const { faker } = require('@faker-js/faker')
const lunaSignupData = require("../data/lunaSignupData")

describe.skip("Sign up - Unhappy Path", async () => {
    for(const record of lunaSignupData){
        it(`should not create account with missing ${record.missingField}`, async () =>{
            await signupPage.open();
            await signupPage.signupPersonalInfo(record.firstname,record.lastname)
            await signupPage.signupLoginInfo(record.email,record.password,record.confirmPassword)
            if (record.missingField != "Confirm Password with Mismatched Password"){
                //await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/customer/account/create/')
                await expect(signupPage.errorMessage).toHaveText(record.errorMessage)
            }else{
                await expect(signupPage.confirmPasswordRequired).toHaveText(record.confirmErrorMessage)
            }

        })
    }

})
describe.skip("Sign up - Happy Path", async () => {
    it('should create account with valid user inputs', async () => {
        await signupPage.open()

        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const password = faker.internet.password()
        await signupPage.signupPersonalInfo(firstName,lastName)
        await signupPage.signupLoginInfo(faker.internet.email(),password,password)
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/customer/account/')
        await expect(signupPage.myAccountHeader).toHaveText('My Account',{ignoreCase:true})
    })

})



