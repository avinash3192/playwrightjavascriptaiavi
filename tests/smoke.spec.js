import {test,expect,request} from '@playwright/test';
//--imports the dotenv package
// import dotenv from 'dotenv';

//--loaded the .env file
// dotenv.config();
//--or
import 'dotenv/config';
// .env
//  ↓
// dotenv.config()
//  ↓
// process.env.BaseUrl
//  ↓
// page.goto(process.env.BaseUrl)
import logger from '../utils/logger'


// Named async function
// test.only("Login to amazon application", async function doValidLogin({page}){
//   await page.goto("https://www.amazon.com");
// })

// Anonymous arrow function - recommended 
test("TC001: Login to saucedemo application", async ({page}) => {
await page.goto(process.env.BaseUrl);
logger.info("our first log for our playwright test with info level");
logger.warn("our first log for our playwright test with warn level");
logger.error("our first log for our playwright test with error level");
logger.debug("our first log for our playwright test with debug level");
logger.silly("I am a silly logger")
await expect(page).toHaveTitle("Swag Labs");

await page.locator("//input[@id='user-name']").fill(process.env.user_name);
await expect(page.locator("//input[@id='user-name']")).toHaveValue("standard_user");

await page.locator("//input[@placeholder='Password']").fill(process.env.password);
await page.locator("//input[@name='login-button']").click();
//pause is used to pause the execution of the test and open the Playwright Inspector.
// await page.pause();

await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();



await page.locator("//button[@data-test='add-to-cart-sauce-labs-backpack']").click();
await page.locator("//a[@class='shopping_cart_link']").click();
await page.locator("//button[text()='Checkout']").click();
await page.locator("//input[@placeholder='First Name']").fill('Avinash');
await page.locator("//input[@id='last-name']").fill('B Rao');
await page.locator("//input[@placeholder='Zip/Postal Code']").fill('560072');
await page.locator("//input[@type='submit']").click();
await page.locator("//button[text()='Finish']").click();
await page.locator("//button[text()='Back Home']").click();
//waitForTimeout is used to pause the execution of the test for a specified amount of time. 
// It is useful for debugging and observing the behavior of the application during test execution.
// await page.waitForTimeout(3000);
     logger.info("TC001 is excecuted successfully");
})

// ctrl+sift+k is used to delete a line
// default timeout for expect is 5 seconds.it keeps retrying for 5 seconds
//There is no element with the text Swag Labs12, so Playwright keeps retrying for the default 5 seconds and then throws:


test("TC002: @smoke Dropdown validation in sauce demo website", async ({page})=> {
await page.goto("https://www.saucedemo.com/");
await expect(page).toHaveTitle("Swag Labs");
await page.locator("//input[@id='user-name']").fill('standard_user');
await expect(page.locator("//input[@id='user-name']")).toHaveValue("standard_user");
await page.locator("//input[@placeholder='Password']").fill('secret_sauce');
await page.locator("//input[@name='login-button']").click();
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
await expect(page.locator("//div[text()='Swag Labs']"))
let dropDown = await page.locator("//select[@class='product_sort_container']");
await dropDown.selectOption("lohi");
await page.waitForTimeout(4000);
await dropDown.selectOption("hilo")
await page.waitForTimeout(4000);
await dropDown.selectOption("az")
await page.waitForTimeout(4000);
await dropDown.selectOption("za");
await page.waitForTimeout(4000);
await expect(page.locator("//div[@class='inventory_item']")).toHaveCount(6);
await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
await expect(page.locator("//span[@class='shopping_cart_badge']")).toHaveCount(1);
})

test("TC003: Navigation methods in playwright website", async ({page})=> {
    await page.goto("https://playwright.dev/");
    await page.locator("//*[@class='getStarted_Sjon']").click();
    await page.goBack();
    await page.waitForTimeout(4000);
    await page.goForward();
    await page.waitForTimeout(4000);
    await page.reload();
    await page.waitForTimeout(4000);
})

test("TC004: @Regression login & logout of saucedemo",async ({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page.locator("//div[text()='Swag Labs']")).toHaveText('Swag Labs');
    await page.locator("//input[@id='user-name']").fill('standard_user');
    await page.locator("//input[@id='password']").fill('secret_sauce');
    await page.locator("//input[@id='login-button']").click();
    await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();
    await page.locator("//button[@id='react-burger-menu-btn']").click();
    await page.locator("//a[@id='logout_sidebar_link']").click();
    await expect(page.locator("//input[@id='login-button']")).toBeEnabled();
})

test("TC005: Try login to testmuai.com selenium-playground", async ({page})=>
{
    await page.goto("https://www.testmuai.com/selenium-playground/");
    await expect(page.locator("//h1[text()='Selenium Playground']")).toHaveText('Selenium Playground');
    await page.locator("//a[text()='Login']").click();
    //Playwright's toBeDisabled() checks the HTML disabled attribute (or aria-disabled), not the button's CSS classes.
    //So, from the browser's perspective, the button is enabled, even though it is styled to look disabled.
    // await expect(page.locator("//button[@class='mt-16 login_continue_button__iSeLz login_continue_button_disabled__Q4Y8A']")).toBeDisabled();
    await expect(page.locator("//button[@class='mt-16 login_continue_button__iSeLz login_continue_button_disabled__Q4Y8A']")).toBeVisible();
    await page.locator("//input[@id='email-input']").fill('arao@gmail.com');
    await expect(page.locator("//button[@class='mt-16 login_continue_button__iSeLz ']")).toBeEnabled();
})


test("TC006: List of products & find the sum of all prices from locators & also total of prices from array", async ({page})=> {
await page.goto("https://www.saucedemo.com/");
await expect(page).toHaveTitle("Swag Labs");
await page.locator("//input[@id='user-name']").fill('standard_user');
console.log(await page.locator("//input[@id='user-name']").inputValue());
let userName = await page.locator("//input[@id='user-name']").inputValue();
console.log("User Name:", userName);
await expect(page.locator("//input[@id='user-name']")).toHaveValue("standard_user");
await expect(page.locator("//input[@id='user-name']")).toHaveValue(userName);
await page.locator("//input[@placeholder='Password']").fill('secret_sauce');
await page.locator("//input[@name='login-button']").click();
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
await expect(page.locator("//div[text()='Swag Labs']"));
let inventoryList = await page.locator("//div[@class='inventory_item']");
let inventoryCount = await inventoryList.count();
let totalPrice = 0;
let prices= [];
let totalArrayPricesA = 0;
let totalArrayPricesB = 0;
for(let i=0;i<inventoryCount;i++){
    const item = inventoryList.nth(i); 
    // nth() is used to get the element at the specified index from the locator.
    //  It returns a new locator that points to the element at the given index.
    //textContent() is a Playwright Locator method that returns all the text inside an element, including the text of its child elements.
    // It retrieves the visible text content of the element, ignoring any HTML tags or attributes.
    //The textContent() method returns a Promise that resolves to a string containing the text content of the element.
    // The textContent() method is asynchronous, so you need to use await to get the actual text value.
    //The replace() method is used to remove the dollar sign from the product price string. It replaces the "$" character with an empty string, effectively removing it.
    const productName = await item.locator(".inventory_item_name").textContent();
    const productPrice = await item.locator(".inventory_item_price").textContent();
    // console.log("Product Name:", productName);
    // console.log("Product Price:", productPrice);
    //const price = parseFloat(productPrice.replace("$", ""));
    const price = Number(productPrice.replace("$",""));
    totalPrice+=price;
    console.log(`Product Name : ${productName}`);
    console.log(`Product Price: $${price}`);
    prices.push(price);
}
    console.log(`Total price of all products ${totalPrice}`);
    console.log("Price Array:", prices);
    //Using for of loop to find the total of prices from array
    for(let ch of prices){
        totalArrayPricesA+=ch;
    }
    //Using for loop to find the total of prices from array
    for(let j =0;j<prices.length;j++){
        totalArrayPricesB+=prices[j];
    }
console.log(`Total of prices after pushing into an array ${totalArrayPricesA}`);
console.log(`Total of prices after pushing into an array ${totalArrayPricesB}`);    

})


test("TC007: @Regression login & logout of saucedemo using browser context",async ({browser}) => {
   const context = await browser.newContext();
   const page = await context.newPage();
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page.locator("//div[text()='Swag Labs']")).toHaveText('Swag Labs');
    await page.locator("//input[@id='user-name']").fill('standard_user');
    await page.locator("//input[@id='password']").fill('secret_sauce');
    await page.locator("//input[@id='login-button']").click();
    await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();
    await page.locator("//button[@id='react-burger-menu-btn']").click();
    await page.locator("//a[@id='logout_sidebar_link']").click();
    await expect(page.locator("//input[@id='login-button']")).toBeEnabled();
})


test("TC008: File Upload test", async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://qa-automation-practice.netlify.app/file-upload.html");
    await page.locator("//*[@id='file_upload']").setInputFiles("testdata/sample.txt");
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(5000);
    await expect(page.locator("//div[@id='file_upload_response']")).toHaveText('You have successfully uploaded "sample.txt"');
    await expect(page.locator("//div[contains(text(),'successfully uploaded')]")).toContainText('You have successfully uploaded');
})

// TC009 - Visual testing
//relative x-path
//xpath - //a[@class='getStarted_Sjon']/../span/a[2] 

// await expect(page.screenshot()).toMatchSnapshot("inst.png");
// page.screenshot() takes a screenshot immediately and returns a Buffer.
// toMatchSnapshot() compares that buffer with the stored snapshot.
// While this works, it is not the preferred Playwright API for visual regression testing.

// Recommended Approach

// Use toHaveScreenshot(), which:

// Automatically waits for the page to stabilize.
// Takes the screenshot internally.
// Produces better error messages and retry behavior.

test("TC009: Visual testing on instagram", async({page})=>{
    await page.goto("https://www.instagram.com/");
    await expect(page).toHaveTitle("Instagram");
        // Wait for a stable UI element instead of a fixed timeout
    await expect(page.locator("//i[@aria-label='Instagram']")).toBeVisible();
    expect(await page.screenshot()).toMatchSnapshot("instagram.png");
    //use either one of them 
    // await expect(page).toHaveScreenshot("instagram.png");
})

test("TC010: Visual testing on Playwright", async ({page})=>{
    await page.goto("https://playwright.dev/");
    await expect(page.locator("//a[text()='Get started']")).toHaveText("Get started");
    const takeScreenShot = await page.screenshot();
    await expect(takeScreenShot).toMatchSnapshot("playwright.png");
    // expect(await page.screenshot()).toMatchSnapshot("playwright.png");
})

// TC011 - Generate the baseline snapshot
//Generate the baseline snapshot once by running:
// npx playwright test --update-snapshots
// or
// npx playwright test -u

test("TC011: Visual testing on Playwright with toHaveScreenshot", async ({page})=>{
    await page.goto("https://playwright.dev/");
    await expect(page.locator("//a[text()='Get started']")).toHaveText("Get started");
    await page.waitForTimeout(5000);
    await expect(page).toHaveScreenshot("playwright.png");
})


test("TC012: Handling simple Java script alert", async({browser})=>{
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await expect(page.locator("//h3[contains(text(),'JavaScript Alerts')]")).toBeVisible();
    page.on('dialog',async dialog=>{
        await dialog.accept();
    })
    await page.locator("//button[contains(@onclick,'jsAlert')]").click();
    await expect(page.locator("//p[text() = 'You successfully clicked an alert']")).toHaveText("You successfully clicked an alert");
    await expect(page.locator("//p[@id= 'result']")).toContainText("You successfully clicked an alert");
})


test("TC013: Handling Java script confirm pop-up - OK", async({browser})=>{
    const browContext = await browser.newContext();
    const page = await browContext.newPage();
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await expect(page.locator("//h3[contains(text(),'JavaScript Alerts')]")).toBeVisible();
    page.on('dialog',async dialog=>{
      await  dialog.accept();
    })
    await page.locator("//button[contains(@onclick,'jsConfirm')]").click();
     await expect(page.locator("//p[text() = 'You clicked: Ok']")).toHaveText("You clicked: Ok");
    await expect(page.locator("//p[@id= 'result']")).toContainText("Ok");
})


test("TC014: Handling Java script confirm pop-up - cancel", async({browser})=>{
    const browContext = await browser.newContext();
    const page = await browContext.newPage();
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await expect(page.locator("//h3[contains(text(),'JavaScript Alerts')]")).toBeVisible();
    page.on('dialog',async dialog=>{
      await  dialog.dismiss();
    })
    await page.locator("//button[contains(@onclick,'jsConfirm')]").click();
     await expect(page.locator("//p[text() = 'You clicked: Cancel']")).toHaveText("You clicked: Cancel");
    await expect(page.locator("//p[@id= 'result']")).toContainText("Cancel");
})


test("TC015: Handling Java script prompt alert", async({browser})=>{
    const browContext = await browser.newContext();
    const page = await browContext.newPage();
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await expect(page.locator("//h3[contains(text(),'JavaScript Alerts')]")).toBeVisible();
    page.on('dialog',async dialog=>{
      await  dialog.accept("This is avinash");
    })
    await page.locator("//button[contains(@onclick,'jsPrompt')]").click();
     await expect(page.locator("//p[text() = 'You entered: This is avinash']")).toHaveText("You entered: This is avinash");
    await expect(page.locator("//p[@id= 'result']")).toContainText("avinash");
})



test("TC016: Handling Webtables in Playwright", async({browser})=>{
    const browContext = await browser.newContext();
    const page = await browContext.newPage();
    await page.goto("https://www.w3schools.com/html/html_tables.asp");
    await expect(page.locator("//span[text()='Sign In']")).toBeVisible();
    //absolute xpath
    await expect(page.locator("//table[@id='customers']/tbody/tr[2]/td[2]")).toHaveText("Maria Anders");
    //relative xpath
    await expect(page.locator("//table[@id='customers']//tr/th[text()='Company']/../th[contains(text(),'Country')]")).toHaveText('Country');
    //relative xpath
    await expect(page.locator("//table[@id='customers']/tbody/tr/th[text()='Company']/../th[contains(text(),'Country')]")).toHaveText('Country');
    let rows = page.locator("//table[@id='customers']//tr");
    let rowsCount = await rows.count();
    console.log(`Total number of rows in the table are ${await rowsCount}`);
    console.log("Total number of rows in the table are : "+await rows.count());
     console.log(`Total number of rows in the table are : ${await rows.count()}`);
    // for(let i=0;i<await rows.count();i++){
    //     let rowText = await rows.nth(i).textContent();
    //     console.log(`rowText from 1st for loop: ${rowText}`);
    // }

    //     for(let j=0;j< rowsCount;j++){
    //         let item = rows.nth(j);
    //     let rowText = await item.textContent();
    //     console.log(`rowText from 2nd for loop: ${rowText}`);
    // }

    //         for(let j=0;j< rowsCount;j++){
    //         let item = rows.nth(j);
    //     let rowText =  await item.textContent();
    //     console.log(`rowText from 3rd for loop: ${rowText}`);
    // }

    //         for(let j=0;j< rowsCount;j++){
    //     let rowText =  await rows.nth(j).textContent();
    //     console.log(`rowText from 4th for loop: ${rowText}`);
    // }


    // Need to check with Sandeep on th below behaviour
    // actual xpaht = //table[@id='customers']//tr[position()>1]/../tr[position()>1]/td[2];
    let updatedRows = await page.locator("//table[@id='customers']//tr[position()>1]");
    let countUpdtdRows = await updatedRows.count();
        console.log(`Total number of updated rows in the table are ${countUpdtdRows}`);
        for(let i=0;i<countUpdtdRows;i++){
            let item = updatedRows.nth(i);
            let updatedRowText = await item.locator("xpath=.//td[2]").textContent();
            //or
            //let updatedRowText = await item.locator("xpath=./td[2]").textContent();
        console.log(`updated rowText from 5th for loop: ${updatedRowText}`);
    }
})

test("TC017: Handling Frames in Playwright", async({page})=>{
    await page.goto("https://www.w3schools.com/html/html_iframe.asp");
     await expect(page.locator("//span[text()='Sign In']")).toBeVisible();
     let frame = page.frameLocator("//iframe[@title='W3Schools HTML Tutorial']");
     await frame.locator("//span[text()='Sign In']").click();
     await expect(frame.locator("//div[@class='auth-title']")).toHaveText("Sign in");
     await page.locator("//span[text()='Sign In']").click();
     await page.waitForTimeout(3000);
})

test("TC018: Keyboard events in Playwright", async({page})=>{
     await page.goto("https://www.saucedemo.com/");
     await expect(page).toHaveTitle("Swag Labs");
     await page.locator("//input[@placeholder='Username']").fill("standard_user");
     await page.keyboard.press("Tab");
     await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
     await page.keyboard.press("Backspace");
     await page.waitForTimeout(3000);
     await page.keyboard.press("Control+A")
     await page.waitForTimeout(3000);
     await page.keyboard.press("Enter");

})


test("TC019: Auto Suggestive Dropdown in Playwright alternate", async ({ page }) => {

    await page.goto("https://www.wikipedia.org/");

    await expect(
        page.locator("//span[contains(text(),'Read Wikipedia in your language')]")
    ).toContainText("Wikipedia");

    const search = page.locator("//input[@id='searchInput']");
    await search.fill("Playwright");

    const autoSuggestions = page.locator("//div[@class='suggestions-dropdown']/a");

    // Wait until suggestions appear
    await autoSuggestions.first().waitFor();

    const count = await autoSuggestions.count();

    console.log(`Auto Suggestions Count: ${count}`);

});

test("TC020: auto suggestive dropdown  or Auto suggestion in Playwright & print all suggestions with entire inner text", async({page})=>{
     await page.goto("https://www.wikipedia.org/");
     await expect(page.locator("//span[contains(text(),'Read Wikipedia in your language')]")).toContainText("Wikipedia");
     const search = page.locator("//input[@id='searchInput']");
     await search.fill("Playwright");
     await page.waitForTimeout(3000);
      let autoSuggestions = page.locator("//div[@class='suggestions-dropdown']/a");
     let count = await autoSuggestions.count();
     console.log(`autoSuggestions count is: ${count}`);
        for(let i=0;i<count;i++){
        let suggestions = autoSuggestions.nth(i);
        let suggestedText = await suggestions.textContent();
        console.log(`suggestedText: ${suggestedText}`);
    }
})  


test("TC021: auto suggestive dropdown  or Auto suggestion in Playwright & print specific inner text", async({page})=>{
     await page.goto("https://www.wikipedia.org/");
     await expect(page.locator("//span[contains(text(),'Read Wikipedia in your language')]")).toContainText("Wikipedia");
     const search = page.locator("//input[@id='searchInput']");
     await search.fill("Playwright");
     await page.waitForTimeout(3000);
      let autoSuggestions = page.locator("//div[@class='suggestions-dropdown']/a");
     let count = await autoSuggestions.count();
     console.log(`autoSuggestions count is: ${count}`);

            for(let i=0;i<count;i++){
        let suggestions = autoSuggestions.nth(i);
        let specificText = await suggestions.locator("xpath=.//h3[@class='suggestion-title']").textContent();
        console.log(`specificText: ${specificText}`);
    }
})  


test("TC022: auto suggestive dropdown  or Auto suggestion in Playwright & print all text until the text is found & click on it", 
    async({page})=>{
     await page.goto("https://www.wikipedia.org/");
     await expect(page.locator("//span[contains(text(),'Read Wikipedia in your language')]")).toContainText("Wikipedia");
     const search = page.locator("//input[@id='searchInput']");
     await search.fill("Playwright");

      let autoTitles = page.locator("//h3[@class='suggestion-title']");
      //wait for suggestions to appear
      await autoTitles.first().waitFor();
     let count = await autoTitles.count();
     console.log(`autoTitles count is: ${count}`);

            for(let i=0;i<count;i++){
        let suggestions = autoTitles.nth(i);
        let autoTitlesText = await suggestions.textContent();
        console.log(`autoTitlesText: ${autoTitlesText}`);
        //The ?. is called the optional chaining operator in JavaScript.
        //it is equivalent to:
    //     if (title !== null && title !== undefined && title.includes("Playwrights Horizons")) {
    // await suggestion.click();
    // break;
// }
//However, since textContent() can return null, using ?. is the safer and recommended approach.
// let title = "Playwrights Horizons";

// console.log(title?.includes("Playwrights")); // true
        if(autoTitlesText?.includes('Playwrights Horizons')){
            //Click the locator, not the text
            await suggestions.click();
            break;
        }
    }
    await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Playwrights_Horizons');
    const pageLocator = page.locator("//span[@class='mw-page-title-main']");
    await expect(pageLocator).toHaveCount(2);
    console.log(`pageLocator count is: ${await pageLocator.count()}`);

})

test("TC023: Auto suggestive dropdown selection using Paytm", async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://paytm.com/electricity-bill-payment");
     await expect(page.locator("div._2tzf")).toContainText("Pay Electricity Bill");
     const searchState = page.locator("div._1exI");
     await searchState.click();
// await page.waitForTimeout(5000);
//css selector 'div._3xI1 li' or '._3xI1 li' or 'div._3xI1 > ul > li' or '._3xI1 > ul > li'
let statesList = await page.locator("//div[@class='_3xI1']//li");
await statesList.first().waitFor();
let statesCount = await statesList.count();
console.log(`states Count is ${statesCount}`);
for(let i=0;i<statesCount;i++){
    let state = await statesList.nth(i).textContent();
    console.log(`Iteration state is: ${state}`);
    if(state?.includes('Karnataka')){
        await statesList.nth(i).click();
        console.log(`selected state is ${state}`);
        break;
    }
}
await page.waitForTimeout(5000);
await expect(page.locator("//label[text()='Electricity Board']")).toHaveText('Electricity Board');
})

// TC024 onwards - Scroll and hover tests
//Autosuggestions tips
// Wait until at least the first suggestion is attached to the DOM
// await autoSuggestions.first().waitFor();

// scenario:
// const autoSuggestions = page.locator("//div[@class='suggestions-dropdown']/a");
// await autoSuggestions.first().waitFor();
// console.log(await autoSuggestions.first().textContent());

// If your goal is specifically to verify that the suggestion is visible, Playwright best practice is:
// await expect(autoSuggestions.first()).toBeVisible();

// If you only need to wait for it before performing an action, waitFor() is fine:
// await autoSuggestions.first().waitFor();
// await autoSuggestions.first().click();

test("TC024: Handling vertical scroll or scroll up/down in playwright using css selector", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
       await page.locator("#user-name").fill("standard_user");
     await expect(page.locator("//input[@placeholder='Username']")).toHaveValue("standard_user");
     await page.locator("#password").fill("secret_sauce");
          await page.locator(".submit-button").click();
     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
     await page.waitForTimeout(3000);
//      page.evaluate() → executes JavaScript in the browser page.
// window.scrollBy(x, y) → scrolls relative to the current position.
// 0 → no horizontal scrolling.
// 600 → scroll down 600 pixels.
     await page.evaluate(()=>window.scrollBy(0,600));
     await page.waitForTimeout(3000);
//      0 → no horizontal scrolling.
// -300 → scroll up 300 pixels.
     await page.evaluate(()=>window.scrollBy(0,-300));
     await page.waitForTimeout(3000);
})

// TC025 - Horizontal scroll test
//https://www.geeksforgeeks.org/maths/x-and-y-axis/
// Initial position
//       ↓
//       0 px
//       │
//       │  scroll +600
//       ↓
//     600 px
//       │
//       │  scroll -300
//       ↑
//     300 px

test("TC025: Handling horizontal scroll from left to right in playwright", async({page})=>{
    await page.goto("data:text/html,<html><body style='margin:0'><div style='width:2000px;height:200px;background:linear-gradient(to right, red, blue);'></div></body></html>");
    await page.waitForTimeout(3000);
//     Scroll horizontally by 1000 pixels
//  scrollBy(x, y) moves relative to the current position.
// 800 → scroll right by 800 pixels
// 0 → don't scroll vertically
    await page.evaluate(()=> window.scrollTo(1000,0));
    await page.waitForTimeout(3000);
    //Go to an absolute position
    // scrollTo(x, y) moves the page to an absolute position.
// 0 → horizontal position (scrollX) = 0
// 0 → vertical position (scrollY) = 0
// So the page is positioned at:
// scrollX = 0
// scrollY = 0
    await page.evaluate(()=> window.scrollTo(0,0));
await page.waitForTimeout(3000);
    await page.evaluate(()=> window.scrollTo(800,0));
    await page.waitForTimeout(3000);
//gets the current horizontal scroll position(i.e. 800) Then check expect(800).toBeGreaterThan(0);
// "Move to the top-left → scroll 800px to the right → verify that horizontal scrolling occurred.
await expect(await page.evaluate(()=>window.scrollX)).toBeGreaterThan(0);
})
// Function	Meaning
// window.scrollTo(0, 0)	Go to an absolute position
// window.scrollBy(800, 0)	Move relative to current position
// window.scrollX	Current horizontal scroll position
// window.scrollY	Current vertical scroll position

test("TC026: Mouse hover using playwright" ,  async ({page})=>{

     await page.goto("https://paytm.com/");
     //ul[class='_2o4VV']>li, ul._2o4VV > li._2Szju, ul._2o4VV:nth-child(1), 
     //find a <li> whose class is _2Szju Select the element if it is the 1st child of its parent.
     await page.locator("li[class='_2Szju']:nth-child(1)").hover();
    //  await page.locator("//ul[@class='_2o4VV']//li[text()='Recharge & Bills']").hover();
     await page.waitForTimeout(3000);
})

test("TC027: HTTP Authentication using Playwright", async ({browser})=>{
     const browserContext = await browser.newContext({httpCredentials:{
        username: 'admin',
        password: 'admin'
     } });
        const page = await browserContext.newPage();
        await page.goto("https://the-internet.herokuapp.com/basic_auth");
        await expect(page.locator("//p[contains(text(),'Congratulations!')]")).toContainText('Congratulations! You must have the proper credentials');

})

test("TC028: Multiple tabs handling using Playwright", async ({browser})=>{
const browsrContxt = await browser.newContext();
const page = await browsrContxt.newPage();
await page.goto("https://paytm.com/");
console.log("Page loaded");
await page.locator("//body/div[@id='app']/header/div[@class='_3aL54']/ul[@class='_2o4VV']/li[1]").hover();
console.log("Hover completed");
const waterBillLink=await page.locator("//a[normalize-space()='Water bill']");
console.log("Water bill found");
const [newPage] = await Promise.all([
    browsrContxt.waitForEvent('page'),
    waterBillLink.click()]); 
                         //browsrContxt.waitForEvent('page')  → returns the new Page object
                     //waterBillLink.click()          → triggers the new tab
                     //Promise.all() returns results in the same order as the promises.
                     console.log("New page opened");
await newPage.waitForLoadState();
//div>button or div>button[class='_11kC  _15qf _2qE6']
 console.log("New page loaded");
          await newPage.locator("//button[contains(@class,'_15qf _2qE6')]").click();
          console.log("Button clicked");
          await newPage.waitForTimeout(3000);
          await newPage.close();
          await page.waitForTimeout(3000);
          await page.reload();
        //   await page.locator("//div[normalize-space()='Paytm for Business']").click();
        await page.waitForLoadState();
        const paytmBusiness = page.locator("//div[normalize-space()='Paytm for Business']");
              await expect(paytmBusiness).toBeVisible();
    await paytmBusiness.click();
          console.log("'Paytm for Business Button clicked");
})

     test("TC029: Radio button handling using Playwright" ,  async ({page})=>{

          await page.goto("https://paytm.com/recharge");
        //   await page.waitForTimeout(3000);
          //input[id='radio0'];//div[@class='MGxf']/label[text()='Postpaid'];//label[text()='Postpaid'];//input[@id='radio1']/..
          await page.locator("//div[@class='MGxf']/label[text()='Postpaid']").click();
          //await page.waitForTimeout(3000);
          await expect(page.locator("//input[@id='radio1']/..")).toBeChecked();
          //div>label._3M_F;//label[@class='_3M_F']
          await page.locator("//label[text()='Prepaid']").click();
          //await page.waitForTimeout(3000);
          await expect(page.locator("//label[text()='Prepaid']")).toBeChecked();
          await expect(page.locator("//label[text()='Postpaid']")).not.toBeChecked();
     })


          test("TC030: Radio button handling using Playwright part-2" ,  async ({page})=>{
            //this test will fail due to the locator used
        //Key point: check() should target the actual <input type="radio">, not the <label>'s <i> styling element.
          await page.goto("https://paytm.com/recharge");
          await page.waitForTimeout(3000);
          //Key point: check() should target the actual <input type="radio">, not the <label>'s <i> styling element.
          //div[class='MGxf']>label>i[class='_3DxO']:nth-child(2) - results in 2 elements match so used xpath traversing
          await page.locator("div[class='MGxf']>label>i[class='_3DxO']:nth-child(2)").check();
          //await page.waitForTimeout(3000);
          await expect(page.locator("div[class='MGxf']>label>i[class='_3DxO']:nth-child(2)")).toBeChecked();
          await page.waitForTimeout(3000);
          //label[class='_3M_F']>i[class='_3DxO']:nth-child(2)
          await page.locator("label[class='_3M_F']>i[class='_3DxO']:nth-child(2)").check()
          await page.waitForTimeout(3000);
          await expect(page.locator("label[class='_3M_F']>i[class='_3DxO']:nth-child(2)")).toBeChecked();
          await expect(page.locator("div[class='MGxf']>label>i[class='_3DxO']:nth-child(2)")).not.toBeChecked();

     })

test("TC031: Drag & drop using Playwright" , async ({page})=>{
    await page.goto(process.env.demoqabaseurl);
    //page.locator() is synchronous; it immediately returns a Locator.don't use await
    const source = page.locator("div#draggable");
    ////p[text()='Drop Here'] or (//div[@id='droppable'])[1]
    //#droppable:visible is cleaner and selects the visible drop zone
    //Ah, this screenshot explains it. #droppable:visible is a Playwright locator syntax, not a valid Chrome DevTools CSS selector.
    const target = page.locator("#droppable:visible");
    await source.dragTo(target);
    await page.waitForTimeout(5000);
    // await page.pause();
    await expect(target).toBeVisible();
    // await expect(target).toContainText('Dropped');
    await expect(target).toHaveText('Dropped!');
})

test("TC032: Playwright with inbuilt locators", async ({page})=>{
    await page.goto(process.env.BaseUrl);
      logger.info("we are using playwright inbuilt locators");
      logger.info("-------getByText------");
      await expect(page.getByText("Swag Labs")).toBeVisible();

      logger.info("--------getByPlaceholder---------")
      await page.getByPlaceholder("Username").fill(process.env.user_name);
      await page.getByPlaceholder("Password").fill(process.env.password);


      logger.info("-----getByRole--------")
      await page.getByRole('button',{name:'Login'}).click();
      await page.waitForTimeout(5000);

      logger.info("-----getByTestId--------")
      await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
      await expect(page.getByTestId('shopping_cart_container')).toHaveCount(1);
      await expect(page.getByTestId('shopping_cart_container')).toHaveText('1');
      await page.getByTestId('shopping_cart_container').click();

      logger.info("-----getByRole----------")
      await page.getByRole('button',{name:'Open Menu'}).click();

      logger.info("-----getByTestId--------")
        await page.getByTestId('logout_sidebar_link').click();
})


test("TC033: Playwright with inbuilt locators-2", async ({page})=>{
    await page.goto(process.env.thejqueryuiurl);
      logger.info("we are using playwright inbuilt locators");
      logger.info("-------getByTitle------");
    //   expect(locator) returns a LocatorAssertions object whose methods are things like 
    //   .toBeVisible(), .toHaveText(), etc. — not locator-narrowing methods.
    //    .first() belongs to the Locator class, so it needs to be called on the raw locator first, 
    //    and the result passed into expect().
  await expect(page.getByTitle("jQuery UI").first()).toBeVisible();
  await expect(page.getByTitle("jQuery UI").nth(1)).toBeVisible();
  await expect(page.getByTitle("jQuery UI").last()).toBeVisible();
  await page.getByTitle('jQuery UI').first().click();
  await page.waitForLoadState(); 

  logger.info("-------getByText-------------")
  await expect(page.getByText("jQuery UI").first()).toBeVisible();

// logger.info("-----getByRole--------")
// await page.getByRole('a',{name:'Plugins'}).click();
// await page.waitForLoadState();

  logger.info("-----getByRole--------");
  const pluginsLink = page.getByRole('link', { name: 'Plugins' });
  await expect(pluginsLink).toBeVisible();       // fail first here if it's not there yet
  await pluginsLink.click();
  //await page.waitForLoadState('load');
//   await page.waitForLoadState("domcontentloaded");
   await page.waitForLoadState();
})

test("TC034: Playwright with inbuilt locators-3", async ({page})=>{
    await page.goto(process.env.playwrightbaseurl);
      logger.info("we are using playwright inbuilt locators");
      logger.info("-------getByRole------");
      const getStarted = page.getByRole('link', {name:'Get started'});
      await expect(getStarted).toBeVisible();
      await getStarted.click();
      await page.waitForLoadState();

      logger.info("-------getByAltText------");
    await page.getByAltText('Playwright logo').click();
    await page.waitForLoadState();

    await expect(getStarted).toBeVisible();
    await expect(getStarted).toHaveText('Get started');
})


test("TC035: Playwright with inbuilt locators-4", async ({page})=>{
    await page.goto(process.env.instagramurl);
      logger.info("we are using playwright inbuilt locators");
      logger.info("-------getByLabel------");
      await page.getByLabel('Mobile number, username or email').fill('avinash');
      await page.getByLabel('Password').fill('avinash');
     await page.getByRole('button',{name:'Log in' , exact: true}).click();
    //   await page.getByRole('button', { name: 'Log In' }).first().click();

      await page.waitForLoadState();
    await expect(page.getByRole('link', { name: 'Find your account and log in.' })).toBeVisible();
     await page.getByRole('link', { name: 'Find your account and log in.' }).click();
    const logInfo = await page.locator("div[class='x78zum5 xdt5ytf']").textContent();
    console.log(`logInfo is: ${logInfo}`);
    if(logInfo?.includes('Find your account and log in.')) {
        logger.info("Login failed as expected.");
    }
});

test("TC035: API testing using Playwright", async ({request})=>
{
    //request.get() is asynchronous. It returns a Promise that will eventually contain the HTTP response.
const response = await request.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41');
console.log(`Status code is ${response.status()}`);
console.log(`Response text is ${response.statusText()}`);
expect(response.status()).toBe(200);
//Now responseBody is a JavaScript object containing the API response.
//Wait for the response body to be converted into a JavaScript object.
// request.get()
//      ↓
//    Promise
//      ↓ await
// APIResponse
//      ↓
// response.json()
//      ↓
//    Promise
//      ↓ await
// JSON object
//Here, response.json() is also asynchronous. It returns a Promise that will eventually contain the parsed JSON.
const responseBody = await response.json();
//JSON.stringify() converts a JavaScript object into a JSON string.
console.log(`Response Body is ${JSON.stringify(responseBody)}`);
// null, 2 - You can format the JSON to make it easier to read:
//JSON.stringify(object, replacer, spaces)
console.log(`Response Body is ${JSON.stringify(responseBody, null, 2)}`);
});


test("TC036: API testing by importing request from Playwright", async ({page})=>{
//Since you are manually creating an APIRequestContext, import request from Playwright:
//import {test,expect,request} from '@playwright/test';
   const apiContext=await request.newContext();
   const response=await apiContext.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41");
console.log(`Status code is ${response.status()}`);
console.log(`Response text is ${response.statusText()}`);

   // launch the application only after doing the api testing
   await page.goto("https://www.saucedemo.com/");
   await page.locator("#user-name").fill("standard_user");
   await page.locator("#password").fill("secret_sauce");
   await page.locator("#login-button").click();
   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");


})


test("TC037: API testing by using request fixture from Playwright", async ({page, request})=>{
//You don't actually need to create apiContext manually. Playwright already provides the request fixture.
//    const apiContext=await request.newContext();
   const response=await request.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41");
console.log(`Status code is ${response.status()}`);
console.log(`Response text is ${response.statusText()}`);

   // launch the application only after doing the api testing
   await page.goto("https://www.saucedemo.com/");
   await page.locator("#user-name").fill("standard_user");
   await page.locator("#password").fill("secret_sauce");
   await page.locator("#login-button").click();
   await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");


})


test('TC038: Browser context example', async ({ context, page }) => {

    // page belongs to this context
    await page.goto('https://www.saucedemo.com/');

    // Create another page in the same browser context
    const page2 = await context.newPage();

    await page2.goto('https://www.google.com');

        // Create another page in the same browser context
    const page3 = await context.newPage();

    await page3.goto('https://playwright.dev/');

});

test('TC039: Browser context example using context fixture ', async ({ context }) => {
// If your goal is specifically to demonstrate context.newPage(), you don't actually need the initial page fixture. You can create all pages manually
    const page = await context.newPage();
    await page.goto('https://www.jqueryui.com/droppable/');

    const page1 = await context.newPage(); // Create a new page in the browser context
    await page1.goto('https://www.saucedemo.com/');

    const page2 = await context.newPage(); // Create another page in the same browser context
    await page2.goto('https://www.google.com');

    const page3 = await context.newPage(); // Create another page in the same browser context
    await page3.goto('https://playwright.dev/');

});



test('TC040: Multiple users using browser fixture with separate contexts', async ({ browser }) => {

    const user1Context = await browser.newContext();
    const user1Page = await user1Context.newPage();

    const user2Context = await browser.newContext();
    const user2Page = await user2Context.newPage();

    await user1Page.goto('https://www.saucedemo.com/');
    await user2Page.goto('https://www.google.com');

});



test('TC041: Multiple pages using browser fixture in the same browser context', async ({ browser }) => {

    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto('https://www.saucedemo.com/');

    const page2 = await context.newPage();
    await page2.goto('https://www.google.com');

    const page3 = await context.newPage();
    await page3.goto('https://playwright.dev/');

    await context.close();

});

test.beforeEach(async ({page})=>{
     logger.info("Test case execution started")
})
test.afterEach(async ({page})=>{
     logger.info("Test case execution completed")
})

test.beforeAll(()=>{
     logger.info("Test suite execution started")
})

test.afterAll(()=>{
     logger.info("Test suite execution completed")
})

// test.beforeAll(() => {
//     logger.info("Test suite execution started");
// });

// test.beforeEach(async ({ page }) => {
//     logger.info("Test case execution started");
//     await page.goto("https://www.saucedemo.com/");
// });

// test("Test 1", async ({ page }) => {
//     // Test 1
// });

// test("Test 2", async ({ page }) => {
//     // Test 2
// });

test.afterEach(async ({ page }) => {
    logger.info("Test case execution completed");
});

test.afterAll(() => {
    logger.info("Test suite execution completed");
});

test(
  'TC042: Browser context example without context fixture',
  async ({ browser,page }) => {
    //     If your goal is "without the context fixture"
// You need to manually create the context using the browser fixture:
    // page belongs to Playwright's automatically created context
    await page.goto('https://www.saucedemo.com/');

    // Manually create a NEW browser context
    const context = await browser.newContext();

    // Create pages inside the manually created context
    const page2 = await context.newPage();
    await page2.goto('https://www.google.com');

    const page3 = await context.newPage();
    await page3.goto('https://playwright.dev/');

    // Manually create a NEW browser context
    const context1 = await browser.newContext();
    const page4 = await context1.newPage();
    await page4.goto('https://www.wikipedia.org/');

    // Close the manually created context
    await context.close();
  }
);


test("TC043: scrollIntoViewIfNeeded() method in playwright", async({page})=>{
    await page.goto("https://www.wikipedia.org/");
    logger.info("navigated to wikipedia");
    //Locate a specific element & scroll it into view if it is not already visible in the viewport.
    await page.locator("//a[text()='Privacy Policy']").scrollIntoViewIfNeeded();
    logger.info("scrolled to the element");
    //verify thhat the element is visible in the viewport
    await expect(page.locator("//a[text()='Privacy Policy']")).toBeVisible();
    logger.info("element is visible in the viewport");
    await page.waitForTimeout(3000);
    logger.info("waited for 3 seconds");
})

test("@smoke TC044: Handling vertical scroll or scroll up/down in playwright using page.mouse.wheel", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
       await page.locator("#user-name").fill("standard_user");
     await expect(page.locator("//input[@placeholder='Username']")).toHaveValue("standard_user");
     await page.locator("#password").fill("secret_sauce");
          await page.locator(".submit-button").click();
     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
     await page.waitForTimeout(3000);
    // "Scroll the page by 600 pixels"
     await page.mouse.wheel(0, 600);
     //scroll up
     await page.mouse.wheel(0,-300);
     await page.waitForTimeout(3000);
})


test("TC045: Handling horizontal scroll from left to right in playwright using page.mouse.wheel function", async({page})=>{
    await page.goto("data:text/html,<html><body style='margin:0'><div style='width:2000px;height:200px;background:linear-gradient(to right, red, blue);'></div></body></html>");
     await page.waitForTimeout(3000);
   //Scroll right 1000 px
     await page.mouse.wheel(1000, 0);
     await page.waitForTimeout(3000);
     //Scroll left 1000 px
        await page.mouse.wheel(-1000, 0);
        await page.waitForTimeout(3000);
     //No scrolling
     await page.mouse.wheel(0,0);
     await page.waitForTimeout(3000);
     //Scroll right 800 px
     await page.waitForTimeout(800,0);
     await page.waitForTimeout(3000);
})