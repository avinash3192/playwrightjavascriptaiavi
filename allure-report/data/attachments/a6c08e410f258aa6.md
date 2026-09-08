# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.js >> TC017: Handling Frames in Playwright
- Location: tests\smoke.spec.js:371:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "JavaScript Alerts" [level=3] [ref=e8]
      - paragraph [ref=e9]: Here are some examples of different JavaScript alerts which can be troublesome for automation
      - list [ref=e10]:
        - listitem [ref=e11]:
          - button "Click for JS Alert" [ref=e12] [cursor=pointer]
        - listitem [ref=e13]:
          - button "Click for JS Confirm" [ref=e14] [cursor=pointer]
        - listitem [ref=e15]:
          - button "Click for JS Prompt" [active] [ref=e16] [cursor=pointer]
      - heading "Result:" [level=4] [ref=e17]
      - paragraph [ref=e18]: "You entered: This is avinash"
  - generic [ref=e20]:
    - separator [ref=e21]
    - generic [ref=e22]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e23] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
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
  335 |     //     let rowText = await rows.nth(i).textContent();
  336 |     //     console.log(`rowText from 1st for loop: ${rowText}`);
  337 |     // }
  338 | 
  339 |     //     for(let j=0;j< rowsCount;j++){
  340 |     //         let item = rows.nth(j);
  341 |     //     let rowText = await item.textContent();
  342 |     //     console.log(`rowText from 2nd for loop: ${rowText}`);
  343 |     // }
  344 | 
  345 |     //         for(let j=0;j< rowsCount;j++){
  346 |     //         let item = rows.nth(j);
  347 |     //     let rowText =  await item.textContent();
  348 |     //     console.log(`rowText from 3rd for loop: ${rowText}`);
  349 |     // }
  350 | 
  351 |     //         for(let j=0;j< rowsCount;j++){
  352 |     //     let rowText =  await rows.nth(j).textContent();
  353 |     //     console.log(`rowText from 4th for loop: ${rowText}`);
  354 |     // }
  355 | 
  356 | 
  357 |     // Need to check with Sandeep on th below behaviour
  358 |     // actual xpaht = //table[@id='customers']//tr[position()>1]/../tr[position()>1]/td[2];
  359 |     let updatedRows = await page.locator("//table[@id='customers']//tr[position()>1]");
  360 |     let countUpdtdRows = await updatedRows.count();
  361 |         console.log(`Total number of updated rows in the table are ${countUpdtdRows}`);
  362 |         for(let i=0;i<countUpdtdRows;i++){
  363 |             let item = updatedRows.nth(i);
  364 |             let updatedRowText = await item.locator("xpath=.//td[2]").textContent();
  365 |             //or
  366 |             //let updatedRowText = await item.locator("xpath=./td[2]").textContent();
  367 |         console.log(`updated rowText from 5th for loop: ${updatedRowText}`);
  368 |     }
  369 | })
  370 | 
  371 | test("TC017: Handling Frames in Playwright", async({page})=>{
  372 |     await page.goto("https://www.w3schools.com/html/html_iframe.asp");
  373 |      await expect(page.locator("//span[text()='Sign In']")).toBeVisible();
  374 |      let frame = page.frameLocator("//iframe[@title='W3Schools HTML Tutorial']");
  375 |      await frame.locator("//span[text()='Sign In']").click();
  376 |      await expect(frame.locator("//div[@class='auth-title']")).toHaveText("Sign in");
  377 |      await page.locator("//span[text()='Sign In']").click();
> 378 |      await page.waitForTimeout(3000);
      |                 ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  379 | })
  380 | 
  381 | test("TC018: Keyboard events in Playwright", async({page})=>{
  382 |      await page.goto("https://www.saucedemo.com/");
  383 |      await expect(page).toHaveTitle("Swag Labs");
  384 |      await page.locator("//input[@placeholder='Username']").fill("standard_user");
  385 |      await page.keyboard.press("Tab");
  386 |      await page.locator("//input[@placeholder='Password']").fill("secret_sauce");
  387 |      await page.keyboard.press("Backspace");
  388 |      await page.waitForTimeout(3000);
  389 |      await page.keyboard.press("Control+A")
  390 |      await page.waitForTimeout(3000);
  391 |      await page.keyboard.press("Enter");
  392 | 
  393 | })
  394 | 
  395 | 
  396 | test("TC019: Auto Suggestive Dropdown in Playwright alternate", async ({ page }) => {
  397 | 
  398 |     await page.goto("https://www.wikipedia.org/");
  399 | 
  400 |     await expect(
  401 |         page.locator("//span[contains(text(),'Read Wikipedia in your language')]")
  402 |     ).toContainText("Wikipedia");
  403 | 
  404 |     const search = page.locator("//input[@id='searchInput']");
  405 |     await search.fill("Playwright");
  406 | 
  407 |     const autoSuggestions = page.locator("//div[@class='suggestions-dropdown']/a");
  408 | 
  409 |     // Wait until suggestions appear
  410 |     await autoSuggestions.first().waitFor();
  411 | 
  412 |     const count = await autoSuggestions.count();
  413 | 
  414 |     console.log(`Auto Suggestions Count: ${count}`);
  415 | 
  416 | });
  417 | 
  418 | test("TC020: auto suggestive dropdown  or Auto suggestion in Playwright & print all suggestions with entire inner text", async({page})=>{
  419 |      await page.goto("https://www.wikipedia.org/");
  420 |      await expect(page.locator("//span[contains(text(),'Read Wikipedia in your language')]")).toContainText("Wikipedia");
  421 |      const search = page.locator("//input[@id='searchInput']");
  422 |      await search.fill("Playwright");
  423 |      await page.waitForTimeout(3000);
  424 |       let autoSuggestions = page.locator("//div[@class='suggestions-dropdown']/a");
  425 |      let count = await autoSuggestions.count();
  426 |      console.log(`autoSuggestions count is: ${count}`);
  427 |         for(let i=0;i<count;i++){
  428 |         let suggestions = autoSuggestions.nth(i);
  429 |         let suggestedText = await suggestions.textContent();
  430 |         console.log(`suggestedText: ${suggestedText}`);
  431 |     }
  432 | })  
  433 | 
  434 | 
  435 | test("TC021: auto suggestive dropdown  or Auto suggestion in Playwright & print specific inner text", async({page})=>{
  436 |      await page.goto("https://www.wikipedia.org/");
  437 |      await expect(page.locator("//span[contains(text(),'Read Wikipedia in your language')]")).toContainText("Wikipedia");
  438 |      const search = page.locator("//input[@id='searchInput']");
  439 |      await search.fill("Playwright");
  440 |      await page.waitForTimeout(3000);
  441 |       let autoSuggestions = page.locator("//div[@class='suggestions-dropdown']/a");
  442 |      let count = await autoSuggestions.count();
  443 |      console.log(`autoSuggestions count is: ${count}`);
  444 | 
  445 |             for(let i=0;i<count;i++){
  446 |         let suggestions = autoSuggestions.nth(i);
  447 |         let specificText = await suggestions.locator("xpath=.//h3[@class='suggestion-title']").textContent();
  448 |         console.log(`specificText: ${specificText}`);
  449 |     }
  450 | })  
  451 | 
  452 | 
  453 | test("TC022: auto suggestive dropdown  or Auto suggestion in Playwright & print all text until the text is found & click on it", 
  454 |     async({page})=>{
  455 |      await page.goto("https://www.wikipedia.org/");
  456 |      await expect(page.locator("//span[contains(text(),'Read Wikipedia in your language')]")).toContainText("Wikipedia");
  457 |      const search = page.locator("//input[@id='searchInput']");
  458 |      await search.fill("Playwright");
  459 | 
  460 |       let autoTitles = page.locator("//h3[@class='suggestion-title']");
  461 |       //wait for suggestions to appear
  462 |       await autoTitles.first().waitFor();
  463 |      let count = await autoTitles.count();
  464 |      console.log(`autoTitles count is: ${count}`);
  465 | 
  466 |             for(let i=0;i<count;i++){
  467 |         let suggestions = autoTitles.nth(i);
  468 |         let autoTitlesText = await suggestions.textContent();
  469 |         console.log(`autoTitlesText: ${autoTitlesText}`);
  470 |         //The ?. is called the optional chaining operator in JavaScript.
  471 |         //it is equivalent to:
  472 |     //     if (title !== null && title !== undefined && title.includes("Playwrights Horizons")) {
  473 |     // await suggestion.click();
  474 |     // break;
  475 | // }
  476 | //However, since textContent() can return null, using ?. is the safer and recommended approach.
  477 | // let title = "Playwrights Horizons";
  478 | 
```