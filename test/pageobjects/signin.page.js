
const Page = require('../pageobjects/page')

class SigninPage extends Page {


    /*
    Test Test
    test123@exampletest.com 
    Password1
    */
   get inputEmailField(){
        return $('#email')
   }

   get inputPasswordField(){
        return $('[title ="Password"]')
   }

   get signInButton(){
        return $('button.action.login.primary')
   }

   async loginToLuma(email,password){
        await this.inputEmailField.setValue(email);
        await this.inputPasswordField.setValue(password);
        await this.signInButton.click();
   }

    open () {
        return super.open('customer/account/login');
    }

}
module.exports = new SigninPage();