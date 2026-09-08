# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.js >> TC004: @Regression login & logout of saucedemo
- Location: tests\smoke.spec.js:106:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//div[text()=\'Swag Labs\']')
Expected: "Swag Labs"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('//div[text()=\'Swag Labs\']') with timeout 5000ms
  - waiting for locator('//div[text()=\'Swag Labs\']')

```

```yaml
- table:
  - rowgroup:
    - row:
      - cell:
        - img
- table:
  - rowgroup:
    - 'row "D22 Sorry, you don''t have permission to visit this site. 🚫 Access Blocked: Potentially Unsafe Website If you believe this URL has been blocked in error and you require access for legitimate business purposes, please raise a Security Exception Ticket. Be sure to include the business need and full URL in your ticket — the more detail you provide, the faster we can assist. If you have any questions, please contact isg@solifi.com. Attempting to bypass security measures or accessing potentially harmful websites can compromise our networks security and may result in disciplinary action. 📚 Policy Information: • Solifi Security Policy. Not allowed to browse Portals category You tried to visit:https://www.saucedemo.com/ See our internet use policy. Need help? Contact our support team at isg@solifi.com Your organization has selected Zscaler to protect you from internet threats."':
      - 'cell "D22 Sorry, you don''t have permission to visit this site. 🚫 Access Blocked: Potentially Unsafe Website If you believe this URL has been blocked in error and you require access for legitimate business purposes, please raise a Security Exception Ticket. Be sure to include the business need and full URL in your ticket — the more detail you provide, the faster we can assist. If you have any questions, please contact isg@solifi.com. Attempting to bypass security measures or accessing potentially harmful websites can compromise our networks security and may result in disciplinary action. 📚 Policy Information: • Solifi Security Policy. Not allowed to browse Portals category You tried to visit:https://www.saucedemo.com/ See our internet use policy. Need help? Contact our support team at isg@solifi.com Your organization has selected Zscaler to protect you from internet threats."':
        - text: D22
        - table:
          - rowgroup:
            - row "Sorry, you don't have permission to visit this site.":
              - cell "Sorry, you don't have permission to visit this site."
            - row:
              - cell:
                - separator
            - 'row "🚫 Access Blocked: Potentially Unsafe Website If you believe this URL has been blocked in error and you require access for legitimate business purposes, please raise a Security Exception Ticket. Be sure to include the business need and full URL in your ticket — the more detail you provide, the faster we can assist. If you have any questions, please contact isg@solifi.com. Attempting to bypass security measures or accessing potentially harmful websites can compromise our networks security and may result in disciplinary action. 📚 Policy Information: • Solifi Security Policy."':
              - 'cell "🚫 Access Blocked: Potentially Unsafe Website If you believe this URL has been blocked in error and you require access for legitimate business purposes, please raise a Security Exception Ticket. Be sure to include the business need and full URL in your ticket — the more detail you provide, the faster we can assist. If you have any questions, please contact isg@solifi.com. Attempting to bypass security measures or accessing potentially harmful websites can compromise our networks security and may result in disciplinary action. 📚 Policy Information: • Solifi Security Policy."':
                - 'heading "🚫 Access Blocked: Potentially Unsafe Website" [level=2]'
                - paragraph:
                  - text: If you believe this URL has been blocked in error and you require access for legitimate business purposes, please raise a
                  - link "Security Exception Ticket":
                    - /url: https://solifi.atlassian.net/servicedesk/customer/portal/7/group/21/create/10249
                    - strong: Security Exception Ticket
                  - text: .
                - paragraph:
                  - text: Be sure to include the
                  - strong: business need and full URL in your ticket
                  - text: — the more detail you provide, the faster we can assist. If you have any questions, please contact
                  - strong:
                    - link "isg@solifi.com":
                      - /url: mailto:isg@solifi.com
                  - text: .
                - paragraph: Attempting to bypass security measures or accessing potentially harmful websites can compromise our networks security and may result in disciplinary action.
                - paragraph:
                  - strong: "📚 Policy Information:"
                - paragraph:
                  - text: •
                  - link "Solifi Security Policy":
                    - /url: https://idsgrp.sharepoint.com/:b:/r/sites/Security/Shared%20Documents/Other%20Shared%20Docs/Policies%20%26%20Standards/2025/Solifi%20Security%20Policy%20Guide%20v4.2-FINAL.pdf
                  - text: .
            - row "Not allowed to browse Portals category":
              - cell "Not allowed to browse Portals category"
            - row "You tried to visit:https://www.saucedemo.com/":
              - cell "You tried to visit:https://www.saucedemo.com/":
                - text: "You tried to visit:"
                - link "https://www.saucedemo.com/":
                  - /url: https://www.saucedemo.com/
            - row:
              - cell:
                - separator
            - row "See our internet use policy.":
              - cell "See our internet use policy.":
                - link "See our internet use policy.":
                  - /url: https://idsgrp.sharepoint.com/:b:/r/sites/Security/Shared%20Documents/Other%20Shared%20Docs/Policies%20%26%20Standards/2025/Solifi%20Security%20Policy%20Guide%20v4.2-FINAL.pdf?csf=1&web=1&e=v3XxJF
            - row "Need help? Contact our support team at isg@solifi.com":
              - cell "Need help? Contact our support team at isg@solifi.com":
                - text: Need help? Contact our support team at
                - link "isg@solifi.com":
                  - /url: mailto:isg@solifi.com
            - row "Your organization has selected Zscaler to protect you from internet threats.":
              - cell "Your organization has selected Zscaler to protect you from internet threats."
```

# Test source

```ts
  9   | // .env
  10  | //  ↓
  11  | // dotenv.config()
  12  | //  ↓
  13  | // process.env.BaseUrl
  14  | //  ↓
  15  | // page.goto(process.env.BaseUrl)
  16  | import logger from '../utils/logger'
  17  | 
  18  | //tells Playwright to run the tests inside that describe block in parallel instead of one after another.
  19  | // test.describe.configure({mode: 'parallel'});
  20  | 
  21  | import sauceDemoData from '../testdata/saude-demo-data.json';
  22  | 
  23  | 
  24  | // Named async function
  25  | // test.only("Login to amazon application", async function doValidLogin({page}){
  26  | //   await page.goto("https://www.amazon.com");
  27  | // })
  28  | 
  29  | // Anonymous arrow function - recommended 
  30  | test("TC001: Login to saucedemo application", async ({ page }) => {
  31  |     await page.goto(process.env.BaseUrl);
  32  |     logger.info("our first log for our playwright test with info level");
  33  |     logger.warn("our first log for our playwright test with warn level");
  34  |     logger.error("our first log for our playwright test with error level");
  35  |     logger.debug("our first log for our playwright test with debug level");
  36  |     logger.silly("I am a silly logger")
  37  |     await expect(page).toHaveTitle("Swag Labs");
  38  | 
  39  |     await page.locator("//input[@id='user-name']").fill(process.env.user_name);
  40  |     await expect(page.locator("//input[@id='user-name']")).toHaveValue("standard_user");
  41  | 
  42  |     await page.locator("//input[@placeholder='Password']").fill(process.env.password);
  43  |     await page.locator("//input[@name='login-button']").click();
  44  |     //pause is used to pause the execution of the test and open the Playwright Inspector.
  45  |     // await page.pause();
  46  | 
  47  |     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  48  |     await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();
  49  | 
  50  | 
  51  | 
  52  |     await page.locator("//button[@data-test='add-to-cart-sauce-labs-backpack']").click();
  53  |     await page.locator("//a[@class='shopping_cart_link']").click();
  54  |     await page.locator("//button[text()='Checkout']").click();
  55  |     await page.locator("//input[@placeholder='First Name']").fill('Avinash');
  56  |     await page.locator("//input[@id='last-name']").fill('B Rao');
  57  |     await page.locator("//input[@placeholder='Zip/Postal Code']").fill('560072');
  58  |     await page.locator("//input[@type='submit']").click();
  59  |     await page.locator("//button[text()='Finish']").click();
  60  |     await page.locator("//button[text()='Back Home']").click();
  61  |     //waitForTimeout is used to pause the execution of the test for a specified amount of time. 
  62  |     // It is useful for debugging and observing the behavior of the application during test execution.
  63  |     // await page.waitForTimeout(3000);
  64  |     logger.info("TC001 is excecuted successfully");
  65  | })
  66  | 
  67  | // ctrl+sift+k is used to delete a line
  68  | // default timeout for expect is 5 seconds.it keeps retrying for 5 seconds
  69  | //There is no element with the text Swag Labs12, so Playwright keeps retrying for the default 5 seconds and then throws:
  70  | 
  71  | 
  72  | test("TC002: @smoke Dropdown validation in sauce demo website", async ({ page }) => {
  73  |     await page.goto("https://www.saucedemo.com/");
  74  |     await expect(page).toHaveTitle("Swag Labs");
  75  |     await page.locator("//input[@id='user-name']").fill('standard_user');
  76  |     await expect(page.locator("//input[@id='user-name']")).toHaveValue("standard_user");
  77  |     await page.locator("//input[@placeholder='Password']").fill('secret_sauce');
  78  |     await page.locator("//input[@name='login-button']").click();
  79  |     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  80  |     await expect(page.locator("//div[text()='Swag Labs']"))
  81  |     let dropDown = await page.locator("//select[@class='product_sort_container']");
  82  |     await dropDown.selectOption("lohi");
  83  |     await page.waitForTimeout(4000);
  84  |     await dropDown.selectOption("hilo")
  85  |     await page.waitForTimeout(4000);
  86  |     await dropDown.selectOption("az")
  87  |     await page.waitForTimeout(4000);
  88  |     await dropDown.selectOption("za");
  89  |     await page.waitForTimeout(4000);
  90  |     await expect(page.locator("//div[@class='inventory_item']")).toHaveCount(6);
  91  |     await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
  92  |     await expect(page.locator("//span[@class='shopping_cart_badge']")).toHaveCount(1);
  93  | })
  94  | 
  95  | test("TC003: Navigation methods in playwright website", async ({ page }) => {
  96  |     await page.goto("https://playwright.dev/");
  97  |     await page.locator("//*[@class='getStarted_Sjon']").click();
  98  |     await page.goBack();
  99  |     await page.waitForTimeout(4000);
  100 |     await page.goForward();
  101 |     await page.waitForTimeout(4000);
  102 |     await page.reload();
  103 |     await page.waitForTimeout(4000);
  104 | })
  105 | 
  106 | test("TC004: @Regression login & logout of saucedemo", async ({ page }) => {
  107 |     await page.goto("https://www.saucedemo.com/");
  108 |     await expect(page).toHaveURL("https://www.saucedemo.com/");
> 109 |     await expect(page.locator("//div[text()='Swag Labs']")).toHaveText('Swag Labs');
      |                                                             ^ Error: expect(locator).toHaveText(expected) failed
  110 |     await page.locator("//input[@id='user-name']").fill('standard_user');
  111 |     await page.locator("//input[@id='password']").fill('secret_sauce');
  112 |     await page.locator("//input[@id='login-button']").click();
  113 |     await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();
  114 |     await page.locator("//button[@id='react-burger-menu-btn']").click();
  115 |     await page.locator("//a[@id='logout_sidebar_link']").click();
  116 |     await expect(page.locator("//input[@id='login-button']")).toBeEnabled();
  117 | })
  118 | 
  119 | test("TC005: Try login to testmuai.com selenium-playground", async ({ page }) => {
  120 |     await page.goto("https://www.testmuai.com/selenium-playground/");
  121 |     await expect(page.locator("//h1[text()='Selenium Playground']")).toHaveText('Selenium Playground');
  122 |     await page.locator("//a[text()='Login']").click();
  123 |     //Playwright's toBeDisabled() checks the HTML disabled attribute (or aria-disabled), not the button's CSS classes.
  124 |     //So, from the browser's perspective, the button is enabled, even though it is styled to look disabled.
  125 |     // await expect(page.locator("//button[@class='mt-16 login_continue_button__iSeLz login_continue_button_disabled__Q4Y8A']")).toBeDisabled();
  126 |     await expect(page.locator("//button[@class='mt-16 login_continue_button__iSeLz login_continue_button_disabled__Q4Y8A']")).toBeVisible();
  127 |     await page.locator("//input[@id='email-input']").fill('arao@gmail.com');
  128 |     await expect(page.locator("//button[@class='mt-16 login_continue_button__iSeLz ']")).toBeEnabled();
  129 | })
  130 | 
  131 | 
  132 | test("TC006: List of products & find the sum of all prices from locators & also total of prices from array", async ({ page }) => {
  133 |     await page.goto("https://www.saucedemo.com/");
  134 |     await expect(page).toHaveTitle("Swag Labs");
  135 |     await page.locator("//input[@id='user-name']").fill('standard_user');
  136 |     console.log(await page.locator("//input[@id='user-name']").inputValue());
  137 |     let userName = await page.locator("//input[@id='user-name']").inputValue();
  138 |     console.log("User Name:", userName);
  139 |     await expect(page.locator("//input[@id='user-name']")).toHaveValue("standard_user");
  140 |     await expect(page.locator("//input[@id='user-name']")).toHaveValue(userName);
  141 |     await page.locator("//input[@placeholder='Password']").fill('secret_sauce');
  142 |     await page.locator("//input[@name='login-button']").click();
  143 |     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  144 |     await expect(page.locator("//div[text()='Swag Labs']"));
  145 |     let inventoryList = await page.locator("//div[@class='inventory_item']");
  146 |     let inventoryCount = await inventoryList.count();
  147 |     let totalPrice = 0;
  148 |     let prices = [];
  149 |     let totalArrayPricesA = 0;
  150 |     let totalArrayPricesB = 0;
  151 |     for (let i = 0; i < inventoryCount; i++) {
  152 |         const item = inventoryList.nth(i);
  153 |         // nth() is used to get the element at the specified index from the locator.
  154 |         //  It returns a new locator that points to the element at the given index.
  155 |         //textContent() is a Playwright Locator method that returns all the text inside an element, including the text of its child elements.
  156 |         // It retrieves the visible text content of the element, ignoring any HTML tags or attributes.
  157 |         //The textContent() method returns a Promise that resolves to a string containing the text content of the element.
  158 |         // The textContent() method is asynchronous, so you need to use await to get the actual text value.
  159 |         //The replace() method is used to remove the dollar sign from the product price string. It replaces the "$" character with an empty string, effectively removing it.
  160 |         const productName = await item.locator(".inventory_item_name").textContent();
  161 |         const productPrice = await item.locator(".inventory_item_price").textContent();
  162 |         // console.log("Product Name:", productName);
  163 |         // console.log("Product Price:", productPrice);
  164 |         //const price = parseFloat(productPrice.replace("$", ""));
  165 |         const price = Number(productPrice.replace("$", ""));
  166 |         totalPrice += price;
  167 |         console.log(`Product Name : ${productName}`);
  168 |         console.log(`Product Price: $${price}`);
  169 |         prices.push(price);
  170 |     }
  171 |     console.log(`Total price of all products ${totalPrice}`);
  172 |     console.log("Price Array:", prices);
  173 |     //Using for of loop to find the total of prices from array
  174 |     for (let ch of prices) {
  175 |         totalArrayPricesA += ch;
  176 |     }
  177 |     //Using for loop to find the total of prices from array
  178 |     for (let j = 0; j < prices.length; j++) {
  179 |         totalArrayPricesB += prices[j];
  180 |     }
  181 |     console.log(`Total of prices after pushing into an array ${totalArrayPricesA}`);
  182 |     console.log(`Total of prices after pushing into an array ${totalArrayPricesB}`);
  183 | })
  184 | 
  185 | 
  186 | test("TC007: @Regression login & logout of saucedemo using browser context", async ({ browser }) => {
  187 |     const context = await browser.newContext();
  188 |     const page = await context.newPage();
  189 |     await page.goto("https://www.saucedemo.com/");
  190 |     await expect(page).toHaveURL("https://www.saucedemo.com/");
  191 |     await expect(page.locator("//div[text()='Swag Labs']")).toHaveText('Swag Labs');
  192 |     await page.locator("//input[@id='user-name']").fill('standard_user');
  193 |     await page.locator("//input[@id='password']").fill('secret_sauce');
  194 |     await page.locator("//input[@id='login-button']").click();
  195 |     await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();
  196 |     await page.locator("//button[@id='react-burger-menu-btn']").click();
  197 |     await page.locator("//a[@id='logout_sidebar_link']").click();
  198 |     await expect(page.locator("//input[@id='login-button']")).toBeEnabled();
  199 | })
  200 | 
  201 | 
  202 | test("TC008: File Upload test", async ({ browser }) => {
  203 |     const context = await browser.newContext();
  204 |     const page = await context.newPage();
  205 |     await page.goto("https://qa-automation-practice.netlify.app/file-upload.html");
  206 |     await page.locator("//*[@id='file_upload']").setInputFiles("testdata/sample.txt");
  207 |     await page.locator("//button[@type='submit']").click();
  208 |     await page.waitForTimeout(5000);
  209 |     await expect(page.locator("//div[@id='file_upload_response']")).toHaveText('You have successfully uploaded "sample.txt"');
```