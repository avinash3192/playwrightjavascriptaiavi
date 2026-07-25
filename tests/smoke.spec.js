import {test} from '@playwright/test';

// Named async function
// test.only("Login to amazon application", async function doValidLogin({page}){
//   await page.goto("https://www.amazon.com");
// })

// Anonymous arrow function - recommended 
test.only("Login to saucedemo application", async ({page}) => {
await page.goto("https://saucedemo.com/");
await page.locator("//input[@id='user-name']").fill('standard_user');
await page.locator("//input[@placeholder='Password']").fill('secret_sauce');
await page.locator("//input[@name='login-button']").click();
await page.locator("//button[@data-test='add-to-cart-sauce-labs-backpack']").click();
await page.locator("//a[@class='shopping_cart_link']").click();
await page.locator("//button[text()='Checkout']").click();
await page.locator("//input[@placeholder='First Name']").fill('Avinash');
await page.locator("//input[@id='last-name']").fill('B Rao');
await page.locator("//input[@placeholder='Zip/Postal Code']").fill('560072');
await page.locator("//input[@type='submit']").click();
await page.locator("//button[text()='Finish']").click();
await page.locator("//button[text()='Back Home']").click();
})

