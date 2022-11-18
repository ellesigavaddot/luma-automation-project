
const Page = require('./page');

class womenProductPage extends Page{

    //getter from the side menu

    get hoodiesAndSweats(){
        return $('#maincontent > div.columns > div.sidebar.sidebar-main > div.widget.block.block-static-block > div > ul:nth-child(2) > li:nth-child(1) > a')
    }

    //get on the Hoddies &Sweatshit product page
    get hoodiesAndSweatsHeading(){
        return $('#page-title-heading')
    }

    //returns the add to cart button (available on hover)
    get firstProductAddToCartButton(){
        return $('[title = "Add to Cart"]:first-child')
    }

    get productImage(){
        return $('#mini-cart > li.item.product.product-item.odd.last > div > a > span > span > img')
    }

    get productItemLink(){
        return $('a*=Circe Hooded')
    }

    /**
     * add to cart button leads to page for the product
     * 
     */
    get xsmallSizeOfItem(){
        return $('#option-label-size-143-item-166')
    }
    get smallSizeOfItem(){
        return $('[option-id="167"]')
    }

    get medSizeOfItem(){
        return $('#option-label-size-143-item-168')
    }

    get largeSizeOfItem(){
        return $('#option-label-size-143-item-169')
    }

    get xlargeSizeOfItem(){
        return $('#option-label-size-143-item-170')
    }

    get pinkColorOfItem(){
        return $('#option-label-color-93-item-57')
    }

    get quantityOfItem(){
        return $('input#qty')
    }

    get addToCartButton(){
        return $('#product-addtocart-button')
    }

    get successMessage(){
        return $('div.messages')
    }

    async addItemToCart(quantity){
        await this.smallSizeOfItem.click();
        await this.pinkColorOfItem.click();
        await this.quantityOfItem.clearValue();
        await this.quantityOfItem.setValue(quantity);
        await this.addToCartButton.click()
    }


    open () {
        return super.open('women.html');
    }

}
module.exports = new womenProductPage();