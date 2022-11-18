
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
        this.inputEmailField.setValue(email);
        this.inputPasswordField.setValue(password);
        this.signInButton.click();
   }

    open () {
        return super.open('customer/account/login');
    }

}
module.exports = new SigninPage();