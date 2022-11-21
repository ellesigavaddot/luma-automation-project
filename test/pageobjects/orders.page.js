const Page = require('./page')

class orderPage extends Page{

    get orderNumber(){
        return $('a.order-number')
    }

    get pageHeader(){
        return $('h1.page-title')
    }

    get orderMenu(){
        return $('//a[text() = "My Orders"]')
    }

    get recentOrder(){
        return $('tbody > tr:nth-child(1)');
    }


    async getOrderNumberText(){
        const orderNum = await this.orderNumber.getText();
        return orderNum;
    }

    async clickOrderMenu(){
        return this.orderMenu.click();
    }



    open(){
        return super.open('sales/order/history/');
    }

}
module.exports = new orderPage();