# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.js >> TC009: Visual testing on instagram
- Location: tests\smoke.spec.js:229:5

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected) failed

  67887 pixels (ratio 0.08 of all image pixels) are different.

  Snapshot: instagram.png

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - heading [level=3] [ref=e5]:
      - link "QA Practice" [ref=e6] [cursor=pointer]:
        - /url: /
    - list [ref=e7]:
      - listitem [ref=e8]:
        - link "Ecommerce - Login, Add to Cart, Submit order, Logout" [ref=e9] [cursor=pointer]:
          - /url: /auth_ecommerce
      - listitem [ref=e10]:
        - link "Spot the BUGS CHALLENGE" [ref=e11] [cursor=pointer]:
          - /url: /bugs-form
      - listitem [ref=e12]:
        - link "GraphQL Testing" [ref=e13] [cursor=pointer]:
          - /url: /graphql-testing
      - listitem [ref=e14]:
        - link "API Testing" [ref=e15] [cursor=pointer]:
          - /url: /api-testing
      - listitem [ref=e16]:
        - link "Products List - Shop" [ref=e17] [cursor=pointer]:
          - /url: /products_list
      - listitem [ref=e18]:
        - link "Intercept API Request" [ref=e19] [cursor=pointer]:
          - /url: /fetch-api
      - listitem [ref=e20]:
        - link "Visual Testing - GIF Page" [ref=e21] [cursor=pointer]:
          - /url: /visual
      - listitem [ref=e22]:
        - link "Forms" [ref=e23] [cursor=pointer]:
          - /url: "#homeSubmenu"
      - listitem [ref=e24]:
        - link "Buttons" [ref=e25] [cursor=pointer]:
          - /url: "#pageSubmenu"
      - listitem [ref=e26]:
        - link "New Tab / Window" [ref=e27] [cursor=pointer]:
          - /url: "#browserSubmenu"
      - listitem [ref=e28]:
        - link "Btn actions" [ref=e29] [cursor=pointer]:
          - /url: "#actionsSubmenu"
      - listitem [ref=e30]:
        - link "Tables" [ref=e31] [cursor=pointer]:
          - /url: "#tables"
      - listitem [ref=e32]:
        - link "Dropdowns" [ref=e33] [cursor=pointer]:
          - /url: /dropdowns
      - listitem [ref=e34]:
        - link "Iframes" [ref=e35] [cursor=pointer]:
          - /url: /iframe
      - listitem [ref=e36]:
        - link "Alerts" [ref=e37] [cursor=pointer]:
          - /url: /alerts
      - listitem [ref=e38]:
        - link "File Upload" [ref=e39] [cursor=pointer]:
          - /url: /file-upload
      - listitem [ref=e40]:
        - link "Date Pickers" [ref=e41] [cursor=pointer]:
          - /url: /calendar
      - listitem [ref=e42]:
        - link "Loader" [ref=e43] [cursor=pointer]:
          - /url: /loader
      - listitem [ref=e44]:
        - link "Pagination" [ref=e45] [cursor=pointer]:
          - /url: /pagination
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "RV - Website" [ref=e48] [cursor=pointer]:
          - /url: https://razvanvancea.ro/
      - listitem [ref=e49]:
        - link "Let's connect - LinkedIn" [ref=e50] [cursor=pointer]:
          - /url: https://www.linkedin.com/in/razvanvancea/
      - listitem [ref=e51]:
        - link "Learn with RV - YouTube" [ref=e52] [cursor=pointer]:
          - /url: https://youtube.com/learnwithrv
  - generic [ref=e53]:
    - navigation [ref=e54]:
      - generic [ref=e55]:
        - button [ref=e56] [cursor=pointer]
        - list [ref=e61]:
          - listitem [ref=e62]:
            - link "Home" [ref=e63] [cursor=pointer]:
              - /url: /
          - listitem [ref=e64]:
            - link "Contact" [ref=e65] [cursor=pointer]:
              - /url: /contact-us
    - heading "File Upload Example" [level=2] [ref=e66]
    - generic [ref=e68]:
      - button "Choose File" [ref=e69]
      - button "Submit" [active] [ref=e70] [cursor=pointer]
    - generic [ref=e71]: You have successfully uploaded "sample.txt"
```

# Test source

```ts
  134 | await page.locator("//input[@id='user-name']").fill('standard_user');
  135 | console.log(await page.locator("//input[@id='user-name']").inputValue());
  136 | let userName = await page.locator("//input[@id='user-name']").inputValue();
  137 | console.log("User Name:", userName);
  138 | await expect(page.locator("//input[@id='user-name']")).toHaveValue("standard_user");
  139 | await expect(page.locator("//input[@id='user-name']")).toHaveValue(userName);
  140 | await page.locator("//input[@placeholder='Password']").fill('secret_sauce');
  141 | await page.locator("//input[@name='login-button']").click();
  142 | await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  143 | await expect(page.locator("//div[text()='Swag Labs']"));
  144 | let inventoryList = await page.locator("//div[@class='inventory_item']");
  145 | let inventoryCount = await inventoryList.count();
  146 | let totalPrice = 0;
  147 | let prices= [];
  148 | let totalArrayPricesA = 0;
  149 | let totalArrayPricesB = 0;
  150 | for(let i=0;i<inventoryCount;i++){
  151 |     const item = inventoryList.nth(i); 
  152 |     // nth() is used to get the element at the specified index from the locator.
  153 |     //  It returns a new locator that points to the element at the given index.
  154 |     //textContent() is a Playwright Locator method that returns all the text inside an element, including the text of its child elements.
  155 |     // It retrieves the visible text content of the element, ignoring any HTML tags or attributes.
  156 |     //The textContent() method returns a Promise that resolves to a string containing the text content of the element.
  157 |     // The textContent() method is asynchronous, so you need to use await to get the actual text value.
  158 |     //The replace() method is used to remove the dollar sign from the product price string. It replaces the "$" character with an empty string, effectively removing it.
  159 |     const productName = await item.locator(".inventory_item_name").textContent();
  160 |     const productPrice = await item.locator(".inventory_item_price").textContent();
  161 |     // console.log("Product Name:", productName);
  162 |     // console.log("Product Price:", productPrice);
  163 |     //const price = parseFloat(productPrice.replace("$", ""));
  164 |     const price = Number(productPrice.replace("$",""));
  165 |     totalPrice+=price;
  166 |     console.log(`Product Name : ${productName}`);
  167 |     console.log(`Product Price: $${price}`);
  168 |     prices.push(price);
  169 | }
  170 |     console.log(`Total price of all products ${totalPrice}`);
  171 |     console.log("Price Array:", prices);
  172 |     //Using for of loop to find the total of prices from array
  173 |     for(let ch of prices){
  174 |         totalArrayPricesA+=ch;
  175 |     }
  176 |     //Using for loop to find the total of prices from array
  177 |     for(let j =0;j<prices.length;j++){
  178 |         totalArrayPricesB+=prices[j];
  179 |     }
  180 | console.log(`Total of prices after pushing into an array ${totalArrayPricesA}`);
  181 | console.log(`Total of prices after pushing into an array ${totalArrayPricesB}`);    
  182 | })
  183 | 
  184 | 
  185 | test("TC007: @Regression login & logout of saucedemo using browser context",async ({browser}) => {
  186 |    const context = await browser.newContext();
  187 |    const page = await context.newPage();
  188 |     await page.goto("https://www.saucedemo.com/");
  189 |     await expect(page).toHaveURL("https://www.saucedemo.com/");
  190 |     await expect(page.locator("//div[text()='Swag Labs']")).toHaveText('Swag Labs');
  191 |     await page.locator("//input[@id='user-name']").fill('standard_user');
  192 |     await page.locator("//input[@id='password']").fill('secret_sauce');
  193 |     await page.locator("//input[@id='login-button']").click();
  194 |     await expect(page.locator("//div[text()='Swag Labs']")).toBeVisible();
  195 |     await page.locator("//button[@id='react-burger-menu-btn']").click();
  196 |     await page.locator("//a[@id='logout_sidebar_link']").click();
  197 |     await expect(page.locator("//input[@id='login-button']")).toBeEnabled();
  198 | })
  199 | 
  200 | 
  201 | test("TC008: File Upload test", async ({browser})=>{
  202 |     const context = await browser.newContext();
  203 |     const page = await context.newPage();
  204 |     await page.goto("https://qa-automation-practice.netlify.app/file-upload.html");
  205 |     await page.locator("//*[@id='file_upload']").setInputFiles("testdata/sample.txt");
  206 |     await page.locator("//button[@type='submit']").click();
  207 |     await page.waitForTimeout(5000);
  208 |     await expect(page.locator("//div[@id='file_upload_response']")).toHaveText('You have successfully uploaded "sample.txt"');
  209 |     await expect(page.locator("//div[contains(text(),'successfully uploaded')]")).toContainText('You have successfully uploaded');
  210 | })
  211 | 
  212 | // TC009 - Visual testing
  213 | //relative x-path
  214 | //xpath - //a[@class='getStarted_Sjon']/../span/a[2] 
  215 | 
  216 | // await expect(page.screenshot()).toMatchSnapshot("inst.png");
  217 | // page.screenshot() takes a screenshot immediately and returns a Buffer.
  218 | // toMatchSnapshot() compares that buffer with the stored snapshot.
  219 | // While this works, it is not the preferred Playwright API for visual regression testing.
  220 | 
  221 | // Recommended Approach
  222 | 
  223 | // Use toHaveScreenshot(), which:
  224 | 
  225 | // Automatically waits for the page to stabilize.
  226 | // Takes the screenshot internally.
  227 | // Produces better error messages and retry behavior.
  228 | 
  229 | test("TC009: Visual testing on instagram", async({page})=>{
  230 |     await page.goto("https://www.instagram.com/");
  231 |     await expect(page).toHaveTitle("Instagram");
  232 |         // Wait for a stable UI element instead of a fixed timeout
  233 |     await expect(page.locator("//i[@aria-label='Instagram']")).toBeVisible();
> 234 |     expect(await page.screenshot()).toMatchSnapshot("instagram.png");
      |                                     ^ Error: expect(Buffer).toMatchSnapshot(expected) failed
  235 |     //use either one of them 
  236 |     // await expect(page).toHaveScreenshot("instagram.png");
  237 | })
  238 | 
  239 | test("TC010: Visual testing on Playwright", async ({page})=>{
  240 |     await page.goto("https://playwright.dev/");
  241 |     await expect(page.locator("//a[text()='Get started']")).toHaveText("Get started");
  242 |     const takeScreenShot = await page.screenshot();
  243 |     await expect(takeScreenShot).toMatchSnapshot("playwright.png");
  244 |     // expect(await page.screenshot()).toMatchSnapshot("playwright.png");
  245 | })
  246 | 
  247 | // TC011 - Generate the baseline snapshot
  248 | //Generate the baseline snapshot once by running:
  249 | // npx playwright test --update-snapshots
  250 | // or
  251 | // npx playwright test -u
  252 | 
  253 | test("TC011: Visual testing on Playwright with toHaveScreenshot", async ({page})=>{
  254 |     await page.goto("https://playwright.dev/");
  255 |     await expect(page.locator("//a[text()='Get started']")).toHaveText("Get started");
  256 |     await page.waitForTimeout(5000);
  257 |     await expect(page).toHaveScreenshot("playwright.png");
  258 | })
  259 | 
  260 | 
  261 | test("TC012: Handling simple Java script alert", async({browser})=>{
  262 |     const browserContext = await browser.newContext();
  263 |     const page = await browserContext.newPage();
  264 |     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  265 |     await expect(page.locator("//h3[contains(text(),'JavaScript Alerts')]")).toBeVisible();
  266 |     page.on('dialog',async dialog=>{
  267 |         await dialog.accept();
  268 |     })
  269 |     await page.locator("//button[contains(@onclick,'jsAlert')]").click();
  270 |     await expect(page.locator("//p[text() = 'You successfully clicked an alert']")).toHaveText("You successfully clicked an alert");
  271 |     await expect(page.locator("//p[@id= 'result']")).toContainText("You successfully clicked an alert");
  272 | })
  273 | 
  274 | 
  275 | test("TC013: Handling Java script confirm pop-up - OK", async({browser})=>{
  276 |     const browContext = await browser.newContext();
  277 |     const page = await browContext.newPage();
  278 |     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  279 |     await expect(page.locator("//h3[contains(text(),'JavaScript Alerts')]")).toBeVisible();
  280 |     page.on('dialog',async dialog=>{
  281 |       await  dialog.accept();
  282 |     })
  283 |     await page.locator("//button[contains(@onclick,'jsConfirm')]").click();
  284 |      await expect(page.locator("//p[text() = 'You clicked: Ok']")).toHaveText("You clicked: Ok");
  285 |     await expect(page.locator("//p[@id= 'result']")).toContainText("Ok");
  286 | })
  287 | 
  288 | 
  289 | test("TC014: Handling Java script confirm pop-up - cancel", async({browser})=>{
  290 |     const browContext = await browser.newContext();
  291 |     const page = await browContext.newPage();
  292 |     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  293 |     await expect(page.locator("//h3[contains(text(),'JavaScript Alerts')]")).toBeVisible();
  294 |     page.on('dialog',async dialog=>{
  295 |       await  dialog.dismiss();
  296 |     })
  297 |     await page.locator("//button[contains(@onclick,'jsConfirm')]").click();
  298 |      await expect(page.locator("//p[text() = 'You clicked: Cancel']")).toHaveText("You clicked: Cancel");
  299 |     await expect(page.locator("//p[@id= 'result']")).toContainText("Cancel");
  300 | })
  301 | 
  302 | 
  303 | test("TC015: Handling Java script prompt alert", async({browser})=>{
  304 |     const browContext = await browser.newContext();
  305 |     const page = await browContext.newPage();
  306 |     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  307 |     await expect(page.locator("//h3[contains(text(),'JavaScript Alerts')]")).toBeVisible();
  308 |     page.on('dialog',async dialog=>{
  309 |       await  dialog.accept("This is avinash");
  310 |     })
  311 |     await page.locator("//button[contains(@onclick,'jsPrompt')]").click();
  312 |      await expect(page.locator("//p[text() = 'You entered: This is avinash']")).toHaveText("You entered: This is avinash");
  313 |     await expect(page.locator("//p[@id= 'result']")).toContainText("avinash");
  314 | })
  315 | 
  316 | 
  317 | 
  318 | test("TC016: Handling Webtables in Playwright", async({browser})=>{
  319 |     const browContext = await browser.newContext();
  320 |     const page = await browContext.newPage();
  321 |     await page.goto("https://www.w3schools.com/html/html_tables.asp");
  322 |     await expect(page.locator("//span[text()='Sign In']")).toBeVisible();
  323 |     //absolute xpath
  324 |     await expect(page.locator("//table[@id='customers']/tbody/tr[2]/td[2]")).toHaveText("Maria Anders");
  325 |     //relative xpath
  326 |     await expect(page.locator("//table[@id='customers']//tr/th[text()='Company']/../th[contains(text(),'Country')]")).toHaveText('Country');
  327 |     //relative xpath
  328 |     await expect(page.locator("//table[@id='customers']/tbody/tr/th[text()='Company']/../th[contains(text(),'Country')]")).toHaveText('Country');
  329 |     let rows = page.locator("//table[@id='customers']//tr");
  330 |     let rowsCount = await rows.count();
  331 |     console.log(`Total number of rows in the table are ${await rowsCount}`);
  332 |     console.log("Total number of rows in the table are : "+await rows.count());
  333 |      console.log(`Total number of rows in the table are : ${await rows.count()}`);
  334 |     // for(let i=0;i<await rows.count();i++){
```