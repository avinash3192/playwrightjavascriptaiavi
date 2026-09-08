# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.js >> TC007: @Regression login & logout of saucedemo using browser context
- Location: tests\smoke.spec.js:186:5

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
  109 |     await expect(page.locator("//div[text()='Swag Labs']")).toHaveText('Swag Labs');
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
> 191 |     await expect(page.locator("//div[text()='Swag Labs']")).toHaveText('Swag Labs');
      |                                                             ^ Error: expect(locator).toHaveText(expected) failed
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
  210 |     await expect(page.locator("//div[contains(text(),'successfully uploaded')]")).toContainText('You have successfully uploaded');
  211 | })
  212 | 
  213 | // TC009 - Visual testing
  214 | //relative x-path
  215 | //xpath - //a[@class='getStarted_Sjon']/../span/a[2] 
  216 | 
  217 | // await expect(page.screenshot()).toMatchSnapshot("inst.png");
  218 | // page.screenshot() takes a screenshot immediately and returns a Buffer.
  219 | // toMatchSnapshot() compares that buffer with the stored snapshot.
  220 | // While this works, it is not the preferred Playwright API for visual regression testing.
  221 | 
  222 | // Recommended Approach
  223 | 
  224 | // Use toHaveScreenshot(), which:
  225 | 
  226 | // Automatically waits for the page to stabilize.
  227 | // Takes the screenshot internally.
  228 | // Produces better error messages and retry behavior.
  229 | 
  230 | test("TC009: Visual testing on instagram", async ({ page }) => {
  231 |     await page.goto("https://www.instagram.com/");
  232 |     await expect(page).toHaveTitle("Instagram");
  233 |     // Wait for a stable UI element instead of a fixed timeout
  234 |     await expect(page.locator("//i[@aria-label='Instagram']")).toBeVisible();
  235 |     expect(await page.screenshot()).toMatchSnapshot("instagram.png");
  236 |     //use either one of them 
  237 |     // await expect(page).toHaveScreenshot("instagram.png");
  238 | })
  239 | 
  240 | test("TC010: Visual testing on Playwright", async ({ page }) => {
  241 |     await page.goto("https://playwright.dev/");
  242 |     await expect(page.locator("//a[text()='Get started']")).toHaveText("Get started");
  243 |     const takeScreenShot = await page.screenshot();
  244 |     await expect(takeScreenShot).toMatchSnapshot("playwright.png");
  245 |     // expect(await page.screenshot()).toMatchSnapshot("playwright.png");
  246 | })
  247 | 
  248 | // TC011 - Generate the baseline snapshot
  249 | //Generate the baseline snapshot once by running:
  250 | // npx playwright test --update-snapshots
  251 | // or
  252 | // npx playwright test -u
  253 | 
  254 | test("TC011: Visual testing on Playwright with toHaveScreenshot", async ({ page }) => {
  255 |     await page.goto("https://playwright.dev/");
  256 |     await expect(page.locator("//a[text()='Get started']")).toHaveText("Get started");
  257 |     await page.waitForTimeout(5000);
  258 |     await expect(page).toHaveScreenshot("playwright.png");
  259 | })
  260 | 
  261 | 
  262 | test("TC012: Handling simple Java script alert", async ({ browser }) => {
  263 |     const browserContext = await browser.newContext();
  264 |     const page = await browserContext.newPage();
  265 |     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  266 |     await expect(page.locator("//h3[contains(text(),'JavaScript Alerts')]")).toBeVisible();
  267 |     page.on('dialog', async dialog => {
  268 |         await dialog.accept();
  269 |     })
  270 |     await page.locator("//button[contains(@onclick,'jsAlert')]").click();
  271 |     await expect(page.locator("//p[text() = 'You successfully clicked an alert']")).toHaveText("You successfully clicked an alert");
  272 |     await expect(page.locator("//p[@id= 'result']")).toContainText("You successfully clicked an alert");
  273 | })
  274 | 
  275 | 
  276 | test("TC013: Handling Java script confirm pop-up - OK", async ({ browser }) => {
  277 |     const browContext = await browser.newContext();
  278 |     const page = await browContext.newPage();
  279 |     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  280 |     await expect(page.locator("//h3[contains(text(),'JavaScript Alerts')]")).toBeVisible();
  281 |     page.on('dialog', async dialog => {
  282 |         await dialog.accept();
  283 |     })
  284 |     await page.locator("//button[contains(@onclick,'jsConfirm')]").click();
  285 |     await expect(page.locator("//p[text() = 'You clicked: Ok']")).toHaveText("You clicked: Ok");
  286 |     await expect(page.locator("//p[@id= 'result']")).toContainText("Ok");
  287 | })
  288 | 
  289 | 
  290 | test("TC014: Handling Java script confirm pop-up - cancel", async ({ browser }) => {
  291 |     const browContext = await browser.newContext();
```