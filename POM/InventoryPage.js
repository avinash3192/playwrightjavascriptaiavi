import 'dotenv/config';

//for fixture use export default class InventoryPage orelse remove default
export default class InventoryPage {
    //Region1
    constructor(page) {
        this.page = page
        this.swagLabsLogo = page.locator('div.app_logo');
        this.inventoryItems = page.locator('.inventory_item');
        this.inventoryItemsName = page.locator('.inventory_item_name');
        this.firstItemAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartLink = page.locator('.shopping_cart_link');
    }

    //Region2
    async getInventoryItemsCount() {
        return await this.inventoryItems.count();
    }

    async clickFirstItemAddToCartButton() {
        await this.firstItemAddToCartButton.click();
    }

    async clickCartLink() {
        await this.cartLink.click();
    }

    //returns promise
    async getSwagLabsLogo() {
        return this.swagLabsLogo;
    }

    //returns locator
    getSwagLabsLogoLoc() {
        return this.swagLabsLogo;
    }

}