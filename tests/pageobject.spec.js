import { test, expect } from '@playwright/test';
import 'dotenv/config';
import logger from '../utils/logger';
import { LoginPage } from '../POM/LoginPage';
import { InventoryPage } from '../POM/InventoryPage';
import { CheckoutStepOne } from '../POM/CheckoutStepOne';
import { CheckoutStepTwo } from '../POM/CheckoutStepTwo';
import { CheckoutOverviewPage } from '../POM/CheckoutOverviewPage';
import { CheckoutComplete } from '../POM/CheckoutComplete';

console.log("BaseUrl:", process.env.BaseUrl);

test("TC001: Saucedmo end to end test using playwright", async ({ page }) => {
     // initialize the page objects 
     let loginPage = new LoginPage(page);
     let inventoryPage = new InventoryPage(page);
     let checkoutStepOne = new CheckoutStepOne(page);
     let checkoutStepTwo = new CheckoutStepTwo(page);
     let checkoutOverviewPage = new CheckoutOverviewPage(page);
     let checkoutComplete = new CheckoutComplete(page);

     // launch the application
     logger.info("Navigating to login page");
     await loginPage.goToLoginPageUrl();
     await loginPage.validLogin();
     logger.info("Login successful");

     logger.info("Getting inventory items count");
     // get the inventory items count
     let inventoryCount = await inventoryPage.getInventoryItemsCount()
     console.log(`Inventory items count: ${inventoryCount}`);

     await inventoryPage.clickFirstItemAddToCartButton();
     logger.info("Clicked on first item add to cart button");
     await inventoryPage.clickCartLink();
     logger.info("Clicked on cart link");

     let cartItemsCount = await checkoutStepOne.getCartItemsCount();
     console.log(`Cart items count: ${cartItemsCount}`);
     await checkoutStepOne.clickCheckoutButton();
     logger.info("Clicked on checkout button");

     await checkoutStepTwo.enterFirstName();
     logger.info("Entered first name");
     await checkoutStepTwo.enterLastName();
     logger.info("Entered last name");
     await checkoutStepTwo.enterPostalCode();
     logger.info("Entered postal code");
     await checkoutStepTwo.clickContinueButton();
     logger.info("Clicked on continue button");

     await checkoutOverviewPage.clickFinishButton();
     logger.info("Clicked on finish button");

     //getCompleteHeaderText() returns a string, use toBe() --- best practice is to use toBe() for string comparison
     let completeHeaderText = await checkoutComplete.getCompleteHeaderText();
     console.log(`Complete header text: ${completeHeaderText}`);
     const expectedcompleteHeaderText = "Thank you for your order!";
     expect(completeHeaderText).toBe(expectedcompleteHeaderText);

     //returning the Locator & using toHaveText as assertion
     const completeHeaderLoc = await checkoutComplete.getCompleteHeaderLoc();
     await expect(completeHeaderLoc).toHaveText(expectedcompleteHeaderText);

     logger.info("Getting complete header text");

     await checkoutComplete.verifyCompleteHeaderText(completeHeaderText);


          //getCheckoutCompleteText() returns a string, use toBe()
     let checkoutCompleteText = await checkoutComplete.getCheckoutCompleteText();
     console.log(`Checkout complete text: ${checkoutCompleteText}`);
     const expectedCheckoutCompleteText = "Checkout: Complete!";
     expect(checkoutCompleteText).toBe(expectedCheckoutCompleteText);
    //returning the Locator & using toHaveText as assertion
     const checkoutCompleteLoc = await checkoutComplete.getCheckoutCompleteLoc();
     await expect(checkoutCompleteLoc).toHaveText(expectedCheckoutCompleteText);

          logger.info("Getting checkout complete text");

     
     logger.info("Checkout complete verified");

})