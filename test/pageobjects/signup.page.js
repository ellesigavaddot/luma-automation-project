
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignupPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName () {
        return $('input#firstname');
    }

    get inputLastName(){
        return $('input#lastname')
    }

    get checkboxNewsletter(){
        return $('input#is_subscribed')
    }

    get inputSignupEmail(){
        return $('input#email_address')
    }

    get inputPassword(){
        return $('input#password')
    }

    get inputConfirmPassword(){
        return $('input#password-confirmation')
    }

    get buttonCreateAccount(){
        return $('button.action.submit.primary')
    }

    get firstnameRequired(){
        return $('firstname-error')
    }

    get lastnameRequired(){
        return $('#lastname-error')
    }

    get emailRequired(){
        return $('#email_address-error')
    }

    get passwordRequired(){
        return $('#password-error')
    }

    get confirmPasswordRequired(){
        return $('#password-confirmation-error')
    }

    get errorMessage(){
        return $('div.mage-error')
    }

    get myAccountHeader(){
        return $('h1.page-title')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async signupPersonalInfo(firstname, lastname) {
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
    }

    async signupLoginInfo(email,password1,password2){
        await this.inputSignupEmail.setValue(email)
        await this.inputPassword.setValue(password1)
        await this.inputConfirmPassword.setValue(password2)
        await this.buttonCreateAccount.click();

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('customer/account/create');
    }
}

module.exports = new SignupPage();
