import {InventoryPage} from '../../POM/InventoryPage.js';
import {After,Given,When,Then,setDefaultTimeout} from '@cucumber/cucumber';
import {expect } from '@playwright/test';
import 'dotenv/config';

Then('user should be redirected to saucedemo inventory page', async function(){
    // await this.page.waitForURL(/.*\/inventory\.html/, { timeout: 15000 });
    await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
await this.page.waitForTimeout(5000);
});

Then('swag labs app logo to be visible', async function(){
this.inventoryPage = new InventoryPage(this.page);
// await this.inventoryPage.verifySwagLabsLogoVisible();
await expect(await this.inventoryPage.getSwagLabsLogo()).toBeVisible();
});

When('I click on add to cart button', async function(){
    await this.inventoryPage.clickFirstItemAddToCartButton();
});

Then('item should be added to cart page', async function(){
    // Add assertions here to verify the item is in the cart
    const itemCount = await this.inventoryPage.getInventoryItemsCount();
    console.log(`Item count in inventory: ${itemCount}`);
    expect(itemCount).toBeGreaterThan(0); // Example assertion
});

// is this approach recommended? or should we use the above approach to check for error message text?
Then('item should be added to cart page sandeep', async function () {
    const cartBadge = this.page.locator('.shopping_cart_badge');
    await cartBadge.waitFor({ state: 'visible', timeout: 15000 });

    const badgeText = await cartBadge.textContent();
    if (!badgeText || Number.parseInt(badgeText, 10) < 1) {
        throw new Error(`Expected cart badge count to be at least 1 but found: ${badgeText ?? 'empty'}`);
    }
});