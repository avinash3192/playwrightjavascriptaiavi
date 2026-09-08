# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.js >> @regression Sandeep: logs in to Sauce Demo with JSON test data
- Location: tests\smoke.spec.js:1055:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByTestId('title')
Expected: "Products"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" getByTestId('title') with timeout 5000ms
  - waiting for getByTestId('title')

```

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs Products Name (A to Z)
- combobox:
  - option "Name (A to Z)" [selected]
  - option "Name (Z to A)"
  - option "Price (low to high)"
  - option "Price (high to low)"
- link "Sauce Labs Backpack":
  - /url: "#"
  - img "Sauce Labs Backpack"
- link "Sauce Labs Backpack":
  - /url: "#"
- text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
- button "Add to cart"
- link "Sauce Labs Bike Light":
  - /url: "#"
  - img "Sauce Labs Bike Light"
- link "Sauce Labs Bike Light":
  - /url: "#"
- text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
- button "Add to cart"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
  - img "Sauce Labs Bolt T-Shirt"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
- text: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
- button "Add to cart"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
  - img "Sauce Labs Fleece Jacket"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
- text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
- button "Add to cart"
- link "Sauce Labs Onesie":
  - /url: "#"
  - img "Sauce Labs Onesie"
- link "Sauce Labs Onesie":
  - /url: "#"
- text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
- button "Add to cart"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
  - img "Test.allTheThings() T-Shirt (Red)"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
- text: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
- button "Add to cart"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  962  | // test("Test 1", async ({ page }) => {
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
> 1062 |     await expect(page.getByTestId('title')).toHaveText('Products');
       |                                             ^ Error: expect(locator).toHaveText(expected) failed
  1063 |     await expect(page.getByTestId('inventory-item')).toHaveCount(6);
  1064 | })
```