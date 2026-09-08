# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.js >> TC035: Playwright with inbuilt locators-4
- Location: tests\smoke.spec.js:783:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Log in', exact: true })

```

# Test source

```ts
  689 | 
  690 | test("TC031: Drag & drop using Playwright" , async ({page})=>{
  691 |     await page.goto(process.env.demoqabaseurl);
  692 |     //page.locator() is synchronous; it immediately returns a Locator.don't use await
  693 |     const source = page.locator("div#draggable");
  694 |     ////p[text()='Drop Here'] or (//div[@id='droppable'])[1]
  695 |     //#droppable:visible is cleaner and selects the visible drop zone
  696 |     //Ah, this screenshot explains it. #droppable:visible is a Playwright locator syntax, not a valid Chrome DevTools CSS selector.
  697 |     const target = page.locator("#droppable:visible");
  698 |     await source.dragTo(target);
  699 |     await page.waitForTimeout(5000);
  700 |     // await page.pause();
  701 |     await expect(target).toBeVisible();
  702 |     // await expect(target).toContainText('Dropped');
  703 |     await expect(target).toHaveText('Dropped!');
  704 | })
  705 | 
  706 | test("TC032: Playwright with inbuilt locators", async ({page})=>{
  707 |     await page.goto(process.env.BaseUrl);
  708 |       logger.info("we are using playwright inbuilt locators");
  709 |       logger.info("-------getByText------");
  710 |       await expect(page.getByText("Swag Labs")).toBeVisible();
  711 | 
  712 |       logger.info("--------getByPlaceholder---------")
  713 |       await page.getByPlaceholder("Username").fill(process.env.user_name);
  714 |       await page.getByPlaceholder("Password").fill(process.env.password);
  715 | 
  716 | 
  717 |       logger.info("-----getByRole--------")
  718 |       await page.getByRole('button',{name:'Login'}).click();
  719 |       await page.waitForTimeout(5000);
  720 | 
  721 |       logger.info("-----getByTestId--------")
  722 |       await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  723 |       await expect(page.getByTestId('shopping_cart_container')).toHaveCount(1);
  724 |       await expect(page.getByTestId('shopping_cart_container')).toHaveText('1');
  725 |       await page.getByTestId('shopping_cart_container').click();
  726 | 
  727 |       logger.info("-----getByRole----------")
  728 |       await page.getByRole('button',{name:'Open Menu'}).click();
  729 | 
  730 |       logger.info("-----getByTestId--------")
  731 |         await page.getByTestId('logout_sidebar_link').click();
  732 | })
  733 | 
  734 | 
  735 | test("TC033: Playwright with inbuilt locators-2", async ({page})=>{
  736 |     await page.goto(process.env.thejqueryuiurl);
  737 |       logger.info("we are using playwright inbuilt locators");
  738 |       logger.info("-------getByTitle------");
  739 |     //   expect(locator) returns a LocatorAssertions object whose methods are things like 
  740 |     //   .toBeVisible(), .toHaveText(), etc. — not locator-narrowing methods.
  741 |     //    .first() belongs to the Locator class, so it needs to be called on the raw locator first, 
  742 |     //    and the result passed into expect().
  743 |   await expect(page.getByTitle("jQuery UI").first()).toBeVisible();
  744 |   await expect(page.getByTitle("jQuery UI").nth(1)).toBeVisible();
  745 |   await expect(page.getByTitle("jQuery UI").last()).toBeVisible();
  746 |   await page.getByTitle('jQuery UI').first().click();
  747 |   await page.waitForLoadState(); 
  748 | 
  749 |   logger.info("-------getByText-------------")
  750 |   await expect(page.getByText("jQuery UI").first()).toBeVisible();
  751 | 
  752 | // logger.info("-----getByRole--------")
  753 | // await page.getByRole('a',{name:'Plugins'}).click();
  754 | // await page.waitForLoadState();
  755 | 
  756 |   logger.info("-----getByRole--------");
  757 |   const pluginsLink = page.getByRole('link', { name: 'Plugins' });
  758 |   await expect(pluginsLink).toBeVisible();       // fail first here if it's not there yet
  759 |   await pluginsLink.click();
  760 |   //await page.waitForLoadState('load');
  761 | //   await page.waitForLoadState("domcontentloaded");
  762 |    await page.waitForLoadState();
  763 | })
  764 | 
  765 | test("TC034: Playwright with inbuilt locators-3", async ({page})=>{
  766 |     await page.goto(process.env.playwrightbaseurl);
  767 |       logger.info("we are using playwright inbuilt locators");
  768 |       logger.info("-------getByRole------");
  769 |       const getStarted = page.getByRole('link', {name:'Get started'});
  770 |       await expect(getStarted).toBeVisible();
  771 |       await getStarted.click();
  772 |       await page.waitForLoadState();
  773 | 
  774 |       logger.info("-------getByAltText------");
  775 |     await page.getByAltText('Playwright logo').click();
  776 |     await page.waitForLoadState();
  777 | 
  778 |     await expect(getStarted).toBeVisible();
  779 |     await expect(getStarted).toHaveText('Get started');
  780 | })
  781 | 
  782 | 
  783 | test("TC035: Playwright with inbuilt locators-4", async ({page})=>{
  784 |     await page.goto(process.env.instagramurl);
  785 |       logger.info("we are using playwright inbuilt locators");
  786 |       logger.info("-------getByLabel------");
  787 |       await page.getByLabel('Mobile number, username or email').fill('avinash');
  788 |       await page.getByLabel('Password').fill('avinash');
> 789 |      await page.getByRole('button',{name:'Log in' , exact: true}).click();
      |                                                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  790 |     //   await page.getByRole('button', { name: 'Log In' }).first().click();
  791 | 
  792 |       await page.waitForLoadState();
  793 |     await expect(page.getByRole('link', { name: 'Find your account and log in.' })).toBeVisible();
  794 |      await page.getByRole('link', { name: 'Find your account and log in.' }).click();
  795 |     const logInfo = await page.locator("div[class='x78zum5 xdt5ytf']").textContent();
  796 |     console.log(`logInfo is: ${logInfo}`);
  797 |     if(logInfo?.includes('Find your account and log in.')) {
  798 |         logger.info("Login failed as expected.");
  799 |     }
  800 | });
  801 | 
  802 | test("TC035: API testing using Playwright", async ({request})=>
  803 | {
  804 |     //request.get() is asynchronous. It returns a Promise that will eventually contain the HTTP response.
  805 | const response = await request.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41');
  806 | console.log(`Status code is ${response.status()}`);
  807 | console.log(`Response text is ${response.statusText()}`);
  808 | expect(response.status()).toBe(200);
  809 | //Now responseBody is a JavaScript object containing the API response.
  810 | //Wait for the response body to be converted into a JavaScript object.
  811 | // request.get()
  812 | //      ↓
  813 | //    Promise
  814 | //      ↓ await
  815 | // APIResponse
  816 | //      ↓
  817 | // response.json()
  818 | //      ↓
  819 | //    Promise
  820 | //      ↓ await
  821 | // JSON object
  822 | //Here, response.json() is also asynchronous. It returns a Promise that will eventually contain the parsed JSON.
  823 | const responseBody = await response.json();
  824 | //JSON.stringify() converts a JavaScript object into a JSON string.
  825 | console.log(`Response Body is ${JSON.stringify(responseBody)}`);
  826 | // null, 2 - You can format the JSON to make it easier to read:
  827 | //JSON.stringify(object, replacer, spaces)
  828 | console.log(`Response Body is ${JSON.stringify(responseBody, null, 2)}`);
  829 | });
  830 | 
  831 | 
  832 | test("TC036: API testing by importing request from Playwright", async ({page})=>{
  833 | //Since you are manually creating an APIRequestContext, import request from Playwright:
  834 | //import {test,expect,request} from '@playwright/test';
  835 |    const apiContext=await request.newContext();
  836 |    const response=await apiContext.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41");
  837 | console.log(`Status code is ${response.status()}`);
  838 | console.log(`Response text is ${response.statusText()}`);
  839 | 
  840 |    // launch the application only after doing the api testing
  841 |    await page.goto("https://www.saucedemo.com/");
  842 |    await page.locator("#user-name").fill("standard_user");
  843 |    await page.locator("#password").fill("secret_sauce");
  844 |    await page.locator("#login-button").click();
  845 |    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  846 | 
  847 | 
  848 | })
  849 | 
  850 | 
  851 | test("TC037: API testing by using request fixture from Playwright", async ({page, request})=>{
  852 | //You don't actually need to create apiContext manually. Playwright already provides the request fixture.
  853 | //    const apiContext=await request.newContext();
  854 |    const response=await request.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41");
  855 | console.log(`Status code is ${response.status()}`);
  856 | console.log(`Response text is ${response.statusText()}`);
  857 | 
  858 |    // launch the application only after doing the api testing
  859 |    await page.goto("https://www.saucedemo.com/");
  860 |    await page.locator("#user-name").fill("standard_user");
  861 |    await page.locator("#password").fill("secret_sauce");
  862 |    await page.locator("#login-button").click();
  863 |    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  864 | 
  865 | 
  866 | })
  867 | 
  868 | 
  869 | test('TC038: Browser context example', async ({ context, page }) => {
  870 | 
  871 |     // page belongs to this context
  872 |     await page.goto('https://www.saucedemo.com/');
  873 | 
  874 |     // Create another page in the same browser context
  875 |     const page2 = await context.newPage();
  876 | 
  877 |     await page2.goto('https://www.google.com');
  878 | 
  879 |         // Create another page in the same browser context
  880 |     const page3 = await context.newPage();
  881 | 
  882 |     await page3.goto('https://playwright.dev/');
  883 | 
  884 | });
  885 | 
  886 | test('TC039: Browser context example using context fixture ', async ({ context }) => {
  887 | // If your goal is specifically to demonstrate context.newPage(), you don't actually need the initial page fixture. You can create all pages manually
  888 |     const page = await context.newPage();
  889 |     await page.goto('https://www.jqueryui.com/droppable/');
```