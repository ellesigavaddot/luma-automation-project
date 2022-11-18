
const Page = require('./page');


class MainPage extends Page{

    get whatsNewMenu(){
        return $('a#ui-id-3')
    }

    get womenProductMenu(){
        return $('a#ui-id-4')
    }

    get menProductMenu(){
        return $('a#ui-id-5')
    }

    get gearProductMenu(){
        return $('a#ui-id-6')
    }

    get trainingProductMenu(){
        return $('a#ui-id-7')
    }

    get saleMenuOption(){
        return $('a#ui-id-8')
    }

//opens to the luma dashboard
    open () {
        return super.open('');
    }

}

module.exports = new MainPage();