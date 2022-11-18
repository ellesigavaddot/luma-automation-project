const Page = require('./page');

class gearProductPage extends Page{



    open () {
        return super.open('gear.html');
    }

}
module.exports = new gearProductPage();