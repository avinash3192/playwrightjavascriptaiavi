# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.js >> @regression Sandeep: logs in to Sauce Demo with JSON test data
- Location: tests\smoke.spec.js:1055:5

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.inventory-item')
Expected: 6
Received: 0
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" locator('.inventory-item') with timeout 5000ms
  - waiting for locator('.inventory-item')
    14 × locator resolved to 0 elements
       - unexpected value "0"

```

# Test source

```ts
  963  | //     // Test 1
  964  | // });
  965  | 
  966  | // test("Test 2", async ({ page }) => {
  967  | //     // Test 2
  968  | // });
  969  | 
  970  | test.afterEach(async ({ page }) => {
  971  |     logger.info("Test case execution completed");
  972  | });
  973  | 
  974  | test.afterAll(() => {
  975  |     logger.info("Test suite execution completed");
  976  | });
  977  | 
  978  | test(
  979  |     'TC042: Browser context example without context fixture',
  980  |     async ({ browser, page }) => {
  981  |         //     If your goal is "without the context fixture"
  982  |         // You need to manually create the context using the browser fixture:
  983  |         // page belongs to Playwright's automatically created context
  984  |         await page.goto('https://www.saucedemo.com/');
  985  | 
  986  |         // Manually create a NEW browser context
  987  |         const context = await browser.newContext();
  988  | 
  989  |         // Create pages inside the manually created context
  990  |         const page2 = await context.newPage();
  991  |         await page2.goto('https://www.google.com');
  992  | 
  993  |         const page3 = await context.newPage();
  994  |         await page3.goto('https://playwright.dev/');
  995  | 
  996  |         // Manually create a NEW browser context
  997  |         const context1 = await browser.newContext();
  998  |         const page4 = await context1.newPage();
  999  |         await page4.goto('https://www.wikipedia.org/');
  1000 | 
  1001 |         // Close the manually created context
  1002 |         await context.close();
  1003 |     }
  1004 | );
  1005 | 
  1006 | 
  1007 | test("TC043: scrollIntoViewIfNeeded() method in playwright", async ({ page }) => {
  1008 |     await page.goto("https://www.wikipedia.org/");
  1009 |     logger.info("navigated to wikipedia");
  1010 |     //Locate a specific element & scroll it into view if it is not already visible in the viewport.
  1011 |     await page.locator("//a[text()='Privacy Policy']").scrollIntoViewIfNeeded();
  1012 |     logger.info("scrolled to the element");
  1013 |     //verify thhat the element is visible in the viewport
  1014 |     await expect(page.locator("//a[text()='Privacy Policy']")).toBeVisible();
  1015 |     logger.info("element is visible in the viewport");
  1016 |     await page.waitForTimeout(3000);
  1017 |     logger.info("waited for 3 seconds");
  1018 | })
  1019 | 
  1020 | test.only("@smoke TC044: Handling vertical scroll or scroll up/down in playwright using page.mouse.wheel", async ({ page }) => {
  1021 |     await page.goto("https://www.saucedemo.com/");
  1022 |     await expect(page).toHaveTitle("Swag Labs");
  1023 |     await page.locator("#user-name").fill("standard_user");
  1024 |     await expect(page.locator("//input[@placeholder='Username']")).toHaveValue("standard_user");
  1025 |     await page.locator("#password").fill("secret_sauce");
  1026 |     await page.locator(".submit-button").click(); ``
  1027 |     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  1028 |     await page.waitForTimeout(3000);
  1029 |     // "Scroll the page by 600 pixels"
  1030 |     await page.mouse.wheel(0, 600);
  1031 |     //scroll up
  1032 |     await page.mouse.wheel(0, -300);
  1033 |     await page.waitForTimeout(3000);
  1034 | })
  1035 | 
  1036 | 
  1037 | test.only("TC045: Handling horizontal scroll from left to right in playwright using page.mouse.wheel function", async ({ page }) => {
  1038 |     await page.goto("data:text/html,<html><body style='margin:0'><div style='width:2000px;height:200px;background:linear-gradient(to right, red, blue);'></div></body></html>");
  1039 |     await page.waitForTimeout(3000);
  1040 |     //Scroll right 1000 px
  1041 |     await page.mouse.wheel(1000, 0);
  1042 |     await page.waitForTimeout(3000);
  1043 |     //Scroll left 1000 px
  1044 |     await page.mouse.wheel(-1000, 0);
  1045 |     await page.waitForTimeout(3000);
  1046 |     //No scrolling
  1047 |     await page.mouse.wheel(0, 0);
  1048 |     await page.waitForTimeout(3000);
  1049 |     //Scroll right 800 px
  1050 |     await page.waitForTimeout(800, 0);
  1051 |     await page.waitForTimeout(3000);
  1052 | })
  1053 | 
  1054 | 
  1055 | test('@regression Sandeep: logs in to Sauce Demo with JSON test data', async ({ page }) => {
  1056 |     await page.goto(sauceDemoData.url.staging);
  1057 |     await page.getByTestId('user-name').fill(sauceDemoData.validUser.username);
  1058 |     await page.getByTestId('password').fill(sauceDemoData.validUser.password);
  1059 |     await page.getByTestId('login-button').click();
  1060 | 
  1061 |     await expect(page).toHaveURL(/inventory\.html/);
  1062 |     await expect(page.locator('.title')).toHaveText('Products');
> 1063 |     await expect(page.locator('.inventory-item')).toHaveCount(6);
       |                                                   ^ Error: expect(locator).toHaveCount(expected) failed
  1064 | })
```