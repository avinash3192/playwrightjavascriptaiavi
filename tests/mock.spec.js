import {test, expect} from '@playwright/test';


// test('@mock mock test1', async({context,page}) => {
// await page.goto('https://saucedemo.com/');
// const page2 = await context.newPage();
// await page2.goto('https://playwright.dev/');
// })

// test('@mock mock test67', async({context,page}) => {
// await page.goto('https://saucedemo.com/');
// const page2 = await context.newPage();
// await page2.goto('https://playwright.dev/');
// })


// test('@mock mock test99', async({context,page}) => {
// await page.goto('https://saucedemo.com/');
// const page2 = await context.newPage();
// await page2.goto('https://playwright.dev/');
// })


// test('@mock mock test78', async({context,page}) => {
// await page.goto('https://saucedemo.com/');
// const page2 = await context.newPage();
// await page2.goto('https://playwright.dev/');
// })

// test('@mock mock test3', async({context}) => {
// const page = await context.newPage();
// await page.goto('https://saucedemo.com/');
// const page2 = await context.newPage();
// await page2.goto('https://playwright.dev/');
// })


// test('@mock mock test4', async({browser}) => {
// const contextUser = await browser.newContext();
// const page1 = await contextUser.newPage();
// await page1.goto('https://saucedemo.com/');


// const page2 = await contextUser.newPage();
// await page2.goto('https://playwright.dev/');


// const page3 = await contextUser.newPage();
// await page3.goto('https://jqueryui.com/');

// })




// test('@dock mock test5', async({browser}) => {
// const contextUser1 = await browser.newContext();
// const page1 = await contextUser1.newPage();
// await page1.goto('https://saucedemo.com/');

// const contextUser2 = await browser.newContext();
// const page2 = await contextUser2.newPage();
// await page2.goto('https://playwright.dev/');

// const contextUser3 = await browser.newContext();
// const page3 = await contextUser3.newPage();
// await page3.goto('https://jqueryui.com/');

// })

// test('@mock mock test', async({page}) => {
//     await page.goto('https://saucedemo.com/');
//     // await page.goto('https://saucedemo.com/');
//     // await page.goForward();
//     // await page.goBack();
//     // await page.reload();

// await expect(page).toHaveTitle('Swag Labs');
// await expect(page).toHaveURL(/saucedemo/);
// await page.waitForURL(/saucedemo/);
// await expect(page.locator("#user-name")).toHaveAttribute('placeholder','Username');
// await expect(page.locator("#password")).toHaveAttribute('placeholder','Password');
// await expect(page.locator("#login-button")).toHaveText('Login');
// await expect(page.locator("#login-button")).toBeEnabled();
// await expect(page.locator("#login-button")).not.toContainText('Avinash');
// await expect(page.locator("#login-button")).toBeVisible();
// await expect(page.locator("#user-name")).toBeEditable();
// //soft assertions are used to continue the test execution even if the assertion fails, 
// // allowing you to capture multiple failures in a single test run. 
// // This can be useful for identifying multiple issues in a single test case.
// await expect.soft(page.locator("#user-name")).toHaveClass('input_error form_input');
// await page.locator("#user-name").fill('standard_user');
// await expect(page.locator("#user-name")).toHaveValue('standard_user');
// await expect(page.locator("#user-name")).toHaveCount(1);
// await page.locator("#password").fill('secret_sauce');
// await expect(page.locator("#password")).toHaveValue('secret_sauce');    
// await expect(page.locator("#password")).toHaveCount(1);
// await page.locator("#login-button").click();

// })

// test('@mock mock test66667', async({context,page}) => {
// await page.goto('https://saucedemo.com/');
// await page.locator("#user-name").fill('standard_user');
// await page.locator("#password").fill('secret_sauce');
// await page.locator("#login-button").click();
// let dropDown = page.locator(".product_sort_container");
// await dropDown.selectOption('lohi');   
// })

// test("TC003: @mock Navigation methods in playwright website", async ({ page }) => {
//     await page.goto("https://playwright.dev/");
//     await page.locator("//*[@class='getStarted_Sjon']").click();
//     await page.goBack();
//     await page.waitForTimeout(4000);
//     await page.goForward();
//     await page.waitForTimeout(4000);
//     await page.reload();
//     await page.waitForTimeout(4000);
// })

// test("TC006: @mock List of products & find the sum of all prices from locators & also total of prices from array", async ({ page }) => {
//     await page.goto("https://www.saucedemo.com/");
//     await expect(page).toHaveTitle("Swag Labs");
//     await page.locator("//input[@id='user-name']").fill('standard_user');
//     console.log(await page.locator("//input[@id='user-name']").inputValue());
//     let userName = await page.locator("//input[@id='user-name']").inputValue();
//     console.log("User Name:", userName);
//     await expect(page.locator("//input[@id='user-name']")).toHaveValue("standard_user");
//     await expect(page.locator("//input[@id='user-name']")).toHaveValue(userName);
//     await page.locator("//input[@placeholder='Password']").fill('secret_sauce');
//     await page.locator("//input[@name='login-button']").click();
//     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
//     await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();
//         let inventoryList =  page.locator("//div[@class='inventory_item']");
//     let inventoryCount = await inventoryList.count();
//         let totalPrice = 0;
//     let prices = [];
//     let totalArrayPricesA = 0;
//     for(let i=0;i<inventoryCount;i++){
//         const item = inventoryList.nth(i);
//               const productName = await item.locator(".inventory_item_name").innerText();
//         const productPrice = await item.locator(".inventory_item_price").innerText();
//                 console.log("Product Name:", productName);
//         console.log("Product Price:", productPrice);
//         // const price = parseFloat(productPrice.replace("$",""));
//         const price = Number(productPrice.replace("$",""));
//         totalPrice+=price;
//                 console.log(`Product Name : ${productName}`);
//         console.log(`Product Price: ${price}`);
//         prices.push(price);
//     }
//     console.log(`Total price of all products ${totalPrice}`);
//     console.log("Price Array:", prices);
//     for(let ch of prices){
//         totalArrayPricesA+=ch;
//     }
//  console.log(`Total of prices after pushing into an array ${totalArrayPricesA}`);
// })


// test("TC008: @mock File Upload test", async ({ browser }) => {
// const context = await browser.newContext();
// const page = await context.newPage();
//   await page.goto("https://qa-automation-practice.netlify.app/file-upload.html");
//   await page.locator("//*[@id='file_upload']").setInputFiles('testdata/sample.txt');
//   await page.locator("//button[@type='submit']").click();
//   await expect(page.locator("//div[contains(text(),'successfully uploaded')]")).toContainText('You have successfully uploaded');
// })

// test("visual @mock", async ({page}) =>{
//  await page.goto('https://playwright.dev/');
//      await expect(page.locator("//a[text()='Get started']")).toHaveText("Get started");
//      let takeScreenShot = await page.screenshot();
//      expect(takeScreenShot).toMatchSnapshot('playwright.png');

// })

test("visual @mock", async ({page}) =>{
 await page.goto('https://playwright.dev/');
     await expect(page.locator("//a[text()='Get started']")).toHaveText("Get started");

     await expect(page).toHaveScreenshot('playwright.png');

})