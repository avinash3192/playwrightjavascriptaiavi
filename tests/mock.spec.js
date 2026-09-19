import {test, expect} from '@playwright/test';
import 'dotenv/config';
import logger from '../utils/logger.js';



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

// test("visual @mock", async ({page}) =>{
//  await page.goto('https://playwright.dev/');
//      await expect(page.locator("//a[text()='Get started']")).toHaveText("Get started");

//      await expect(page).toHaveScreenshot('playwright.png');

// })

// test("@mock java script pop-ups", async({browser})=>{
// const context = await browser.newContext();
// const page = await context.newPage();
// await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
// page.on('dialog', async dialog =>{
// await dialog.accept("Avinash");  
// })
// await page.locator("//button[normalize-space()='Click for JS Prompt']").click(); 
// await page.locator("#result").waitFor();
// await expect(page.locator("#result")).toHaveText('You entered: Avinash');
// })


// test("TC016: @mock Handling Webtables in Playwright", async ({ browser }) => {
//     const browContext = await browser.newContext();
//     const page = await browContext.newPage();
//     await page.goto("https://www.w3schools.com/html/html_tables.asp");
//     await expect(page.locator("//span[text()='Sign In']")).toBeVisible();
//     //absolute xpath
//     await expect(page.locator("//table[@id='customers']/tbody/tr[2]/td[2]")).toHaveText("Maria Anders");
//     await expect(page.locator("//table[@id='customers']//tr/th[text()='Company']/../th[contains(text(),'Country')]")).toHaveText("Country");
//     let rows =  page.locator("//table[@id='customers']//tr");
//     let rowCount = await rows.count();
//     console.log("Total Rows:", rowCount);
//     let cols = await page.locator("//table[@id='customers']//tr[1]/th").count();
//     console.log("Total Columns:", cols);
//     let tdata = await page.locator("//table[@id='customers']//tr/td").count();
//     console.log("Total Data:", tdata);
//     for(let i=0;i<rowCount;i++){
//         let rowText = await rows.nth(i).textContent();
//         console.log(`Row ${i + 1}:`, rowText);
//     }   
// });

// test("TC017: @mock Handling Frames in Playwright", async ({ page }) => {
//     await page.goto("https://www.w3schools.com/html/html_iframe.asp");
//     await expect(page.locator(".tnb-login-btn")).toBeVisible();
//         let frame = page.frameLocator("//iframe[@title='W3Schools HTML Tutorial']");
//         await frame.locator("//span[text()='Sign In']").click();
//         await expect(frame.locator("//div[@class='auth-title']")).toHaveText("Sign in");
//         await page.locator("//span[text()='Sign In']").click();
// })

// test("TC018: @mock Keyboard events in Playwright", async ({ page }) => {
//     await page.goto("https://www.saucedemo.com/");
//     await expect(page).toHaveTitle("Swag Labs");
//     await page.locator("//input[@placeholder='Username']").fill("standard_user");
//     await page.keyboard.press("Tab");
//     await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
//         await page.keyboard.press("Backspace");
//     await page.keyboard.press("Tab");
//     await page.keyboard.press("Control+A");
//     await page.keyboard.press("Enter");
// })

// test("TC019: @mock Auto Suggestive Dropdown in Playwright alternate", async ({ page }) => {
//     await page.goto("https://www.wikipedia.org/");
//     await expect(page).toHaveTitle(/Wikipedia/);
//     await expect(page).toHaveURL(/wikipedia/);
//     await expect(page.locator("//span[normalize-space()='Read Wikipedia in your language']")).toHaveText("Read Wikipedia in your language");
//     await page.locator("input#searchInput").fill("Playwright");
//     const autoSuggestiveDropdown = page.locator("//div[@class='suggestions-dropdown']/a");
//     await expect(autoSuggestiveDropdown.first()).toBeVisible();
//remove below two lines if you don't want to click on first element
//     await autoSuggestiveDropdown.first().waitFor();
// await autoSuggestiveDropdown.first().click();
//     let count = await autoSuggestiveDropdown.count();
//     console.log("Total Suggestions:", count);
//      await expect(autoSuggestiveDropdown).toHaveCount(count);
//     for(let i=0;i<count;i++){
//         let suggestions = autoSuggestiveDropdown.nth(i);
//         let suggestedText = await suggestions.textContent();
//          console.log(`suggestedText: ${suggestedText}`);
//          if(suggestedText?.includes("Playwrights Horizons")){
//             await suggestions.click();
//             break;

//          }
//     }
//     await expect(page).toHaveURL(/Playwrights_Horizons/);
//             const pageLocator = page.locator("//span[@class='mw-page-title-main']");
//         await expect(pageLocator).toHaveCount(2);
//         console.log(`pageLocator count is: ${await pageLocator.count()}`);
// });

// test("TC024: @mock Handling vertical scroll or scroll up/down in playwright using css selector", async ({ page }) => {
//         await page.goto("https://www.saucedemo.com/");
//     await expect(page).toHaveTitle("Swag Labs");
//     await page.locator("#user-name").fill("standard_user");
//     await expect(page.locator("//input[@placeholder='Username']")).toHaveValue("standard_user");
//     await page.locator("#password").fill("secret_sauce");
//     await page.locator(".submit-button").click();
//     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
//     await page.waitForTimeout(3000);
    // await page.evaluate(() => window.scrollBy(0,600));
    // await page.evaluate(() => window.scrollBy(0,-300));
    // await page.mouse.wheel(0,600);
    // await page.mouse.wheel(0,-300);
    // await page.mouse.dblclick(0, 600);
    // await page.mouse.dblclick(0, -300);
    //     await page.mouse.click(0, 600);
    // await page.mouse.click(0, -300);
    // await page.locator("//a[text()='LinkedIn']").scrollIntoViewIfNeeded();
    // await expect(page.locator("//a[text()='LinkedIn']")).toBeVisible();
    // expect(await page.evaluate(()=> window.scrollY)).toBeGreaterThan(0);
    // })


    // test("TC024: @mock Handling vertical scroll or scroll up/down in playwright using css selector", async ({ page }) => {
    // await page.goto("data:text/html,<html><body style='margin:0'><div style='width:2000px;height:200px;background:linear-gradient(to right, red, blue);'></div></body></html>");
    // await page.waitForTimeout(3000);
    // await page.evaluate(() => window.scrollBy(1000,0));
    // await page.evaluate(() => window.scrollTo(0,0));
    // await page.evaluate(() => window.scrollBy(800,0));
    //  expect(await page.evaluate(()=> window.scrollX)).toBeGreaterThan(0)
    // })

    
// test("TC026: @mock Mouse hover using playwright", async ({ page }) => {

//     await page.goto("https://paytm.com/");
//     await page.locator("//li[text()='Recharge & Bills']").hover();
//     await page.waitForTimeout(3000);
//     ////a[@class='FYjkN']/../ul/li[text()='Recharge & Bills']
//     await page.locator("li[class='_2Szju']:nth-child(1)").click();

// })

// test("TC027: @mock HTTP Authentication using Playwright", async ({ browser }) => {
//     const context = await browser.newContext({
//     httpCredentials: {
//         username: 'admin',
//         password: 'admin'
//     }
//     });
//        const page = await context.newPage();
//        await page.goto("https://the-internet.herokuapp.com/basic_auth");
//     await expect(page.locator("//p[contains(text(),'Congratulations!')]")).toContainText('Congratulations! You must have the proper credentials');
// });


// test("TC026: @mock Multiple tabs using playwright", async ({ browser }) => {
//     const browsrContxt = await browser.newContext();
//     const page = await browsrContxt.newPage();
//     await page.goto("https://paytm.com/");
//     await page.locator("//li[text()='Recharge & Bills']").hover();
//     await page.waitForTimeout(3000);
//     ////a[@class='FYjkN']/../ul/li[text()='Recharge & Bills']
//     await page.locator("li[class='_2Szju']:nth-child(1)").click();
//     let waterBillLink = page.locator("//a[normalize-space()='Water bill']");
//    const [newPage] = await Promise.all([
//         browsrContxt.waitForEvent('page'),
//         waterBillLink.click()]);
//         await newPage.waitForLoadState();
//         let gasLink = page.locator("//a[normalize-space()='Gas & Cylinder']");
//     const [newPage2] = await Promise.all([
//         browsrContxt.waitForEvent('page'),
//         gasLink.click()])
//         await newPage2.waitForLoadState();
//    })

// test("TC031: @mock Drag & drop using Playwright", async ({ page }) => {
//     await page.goto("https://demoqa.com/droppable");

//     const src = page.locator("#draggable");
//     const dest = page.locator("#droppable:visible").first();

//     await src.dragTo(dest);

//     await expect(dest).toHaveText("Dropped!");
// });

// test("TC031: Drag & drop using Playwright", async ({ page }) => {
//     await page.goto('https://vinothqaacademy.com/mouse-event/');

//     const source = page.locator("#dragItem");
//     const target = page.locator("#dropZone").first();

//     await source.dragTo(target);

//     await expect(page.locator("#dragStatus")).toContainText("Dropped Successfully");
// });


// test("TC051:@mock Drag & drop working site using Playwright", async ({ page }) => {
//     await page.goto('https://vinothqaacademy.com/mouse-event/');

//     const source = page.locator("#dragItem");
//     const target = page.locator("#dropZone:visible").first();
//     await target.waitFor();

//     await source.dragTo(target);

//     await expect(page.locator("#dragStatus")).toContainText("Dropped Successfully");
// });


// test("TC035: @mock API testing using Playwright", async ({ request }) => {
//     //request.get() is asynchronous. It returns a Promise that will eventually contain the HTTP response.
// const response = await request.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41')
// console.log(response.status());
// console.log(response.statusText());
// expect(response.status()).toBe(200);
// expect(response.statusText()).toContain('OK');
// const responseBody = await response.json();
// console.log(responseBody.latitude);
// const jsonString = JSON.stringify(responseBody, null, 2);
// console.log(jsonString);

// })


// test("TC035: @mock API testing using Playwright", async ({ request }) => {
// const requestPayload = {
//     name: 'Avi',
//     job: 'test'
// };
// const response = await request.post(process.env.apiURL,{
// data: requestPayload,
// headers: {
//     Accept: "application/json"
// }});
// console.log(response.status());
// console.log(response.statusText());
// expect(response.status()).toBe(201);
// expect(response.ok()).toBeTruthy();
// const responseBody = await response.json();
// console.log(JSON.stringify(responseBody,null,2));
//   console.log("Response Body:", responseBody);
//       expect(responseBody.name).toBe("Avi");
//     expect(responseBody.job).toBe("test");
//     //     expect(responseBody.name).toContain("Avi");
//     // expect(responseBody.job).toContain("test");
// });

test.beforeEach(async ({page})=>{
    logger.info("Test case execution started");
})

test.afterEach(async({page})=>{
    logger.info("Test case execution ended");
})

test.beforeAll(()=>{
    logger.info("Test suite execution started");
})

test.afterAll(() =>{
logger.info("Test suite execution started");
})

test('TC050: @mock railyatri To verify', async({page}) =>
{
    await page.goto('https://www.railyatri.in/');

    await expect(page).toHaveTitle(/RailYatri/);
    await expect(page.locator("//img[@title='RailYatri'] [@alt='RailYatri Logo']").first()).toBeVisible();

        //waitFor() returns void, not the Locator.
    //const railYatriLogo = await page.getByAltText('RailYatri Logo').first().waitFor();


    const railYatriLogo =  page.getByAltText('RailYatri Logo').first();
    await railYatriLogo.waitFor();
await expect(railYatriLogo).toBeVisible();


// 2. Verify the default radio and checkbox states.
const pnrStatus = page.locator('#pnr');
const trainStatus = page.locator('#train-number');
await expect(pnrStatus).toBeChecked();
await expect(trainStatus).not.toBeChecked();

 // 3. Select Train Status and all four Quick Filters.
await trainStatus.check();
await expect(trainStatus).toBeChecked();

// 4. Clear AC Only and Ladies Quota while retaining the other filters.
await page.locator("//label[@for='aconly']").check();
await page.locator("//label[@for='ladiesquota']").click();

 // 6. Open the journey Date calendar & search for hard coded date
const dateField = page.locator('.verticalStyle_dateFieldLable__9JaUR');
await dateField.click();

await page.locator("//button[text()='20']").click();
await page.pause();

await expect(page.locator('#trainDatepicker')).toHaveValue('20 Sep, Sun');
await expect(page.locator('#trainDatepicker')).toHaveValue(/20 Sep/);


await dateField.click();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate()+1);
const tomorrowDay = tomorrow.getDate().toString();
const tomorrowButton = page.locator(`//button[normalize-space()='${tomorrowDay}']`);
await tomorrowButton.click();
await expect(page.locator('#trainDatepicker')).toHaveValue(/20 Sep/);
});