# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke.spec.js >> TC030: Radio button handling using Playwright part-2
- Location: tests\smoke.spec.js:671:15

# Error details

```
Error: locator.check: Error: strict mode violation: locator('div[class=\'MGxf\']>label>i[class=\'_3DxO\']:nth-child(2)') resolved to 2 elements:
    1) <i class="_3DxO"></i> aka locator('label').filter({ hasText: 'Prepaid' }).locator('i')
    2) <i class="_3DxO"></i> aka locator('label').filter({ hasText: 'Postpaid' }).locator('i')

Call log:
  - waiting for locator('div[class=\'MGxf\']>label>i[class=\'_3DxO\']:nth-child(2)')

```

# Test source

```ts
  578 |     await page.evaluate(()=> window.scrollTo(1000,0));
  579 |     await page.waitForTimeout(3000);
  580 |     //Go to an absolute position
  581 |     // scrollTo(x, y) moves the page to an absolute position.
  582 | // 0 → horizontal position (scrollX) = 0
  583 | // 0 → vertical position (scrollY) = 0
  584 | // So the page is positioned at:
  585 | // scrollX = 0
  586 | // scrollY = 0
  587 |     await page.evaluate(()=> window.scrollTo(0,0));
  588 | await page.waitForTimeout(3000);
  589 |     await page.evaluate(()=> window.scrollTo(800,0));
  590 |     await page.waitForTimeout(3000);
  591 | //gets the current horizontal scroll position(i.e. 800) Then check expect(800).toBeGreaterThan(0);
  592 | // "Move to the top-left → scroll 800px to the right → verify that horizontal scrolling occurred.
  593 | await expect(await page.evaluate(()=>window.scrollX)).toBeGreaterThan(0);
  594 | })
  595 | // Function	Meaning
  596 | // window.scrollTo(0, 0)	Go to an absolute position
  597 | // window.scrollBy(800, 0)	Move relative to current position
  598 | // window.scrollX	Current horizontal scroll position
  599 | // window.scrollY	Current vertical scroll position
  600 | 
  601 | test("TC026: Mouse hover using playwright" ,  async ({page})=>{
  602 | 
  603 |      await page.goto("https://paytm.com/");
  604 |      //ul[class='_2o4VV']>li, ul._2o4VV > li._2Szju, ul._2o4VV:nth-child(1), 
  605 |      //find a <li> whose class is _2Szju Select the element if it is the 1st child of its parent.
  606 |      await page.locator("li[class='_2Szju']:nth-child(1)").hover();
  607 |     //  await page.locator("//ul[@class='_2o4VV']//li[text()='Recharge & Bills']").hover();
  608 |      await page.waitForTimeout(3000);
  609 | })
  610 | 
  611 | test("TC027: HTTP Authentication using Playwright", async ({browser})=>{
  612 |      const browserContext = await browser.newContext({httpCredentials:{
  613 |         username: 'admin',
  614 |         password: 'admin'
  615 |      } });
  616 |         const page = await browserContext.newPage();
  617 |         await page.goto("https://the-internet.herokuapp.com/basic_auth");
  618 |         await expect(page.locator("//p[contains(text(),'Congratulations!')]")).toContainText('Congratulations! You must have the proper credentials');
  619 | 
  620 | })
  621 | 
  622 | test("TC028: Multiple tabs handling using Playwright", async ({browser})=>{
  623 | const browsrContxt = await browser.newContext();
  624 | const page = await browsrContxt.newPage();
  625 | await page.goto("https://paytm.com/");
  626 | console.log("Page loaded");
  627 | await page.locator("//body/div[@id='app']/header/div[@class='_3aL54']/ul[@class='_2o4VV']/li[1]").hover();
  628 | console.log("Hover completed");
  629 | const waterBillLink=await page.locator("//a[normalize-space()='Water bill']");
  630 | console.log("Water bill found");
  631 | const [newPage] = await Promise.all([
  632 |     browsrContxt.waitForEvent('page'),
  633 |     waterBillLink.click()]); 
  634 |                          //browsrContxt.waitForEvent('page')  → returns the new Page object
  635 |                      //waterBillLink.click()          → triggers the new tab
  636 |                      //Promise.all() returns results in the same order as the promises.
  637 |                      console.log("New page opened");
  638 | await newPage.waitForLoadState();
  639 | //div>button or div>button[class='_11kC  _15qf _2qE6']
  640 |  console.log("New page loaded");
  641 |           await newPage.locator("//button[contains(@class,'_15qf _2qE6')]").click();
  642 |           console.log("Button clicked");
  643 |           await newPage.waitForTimeout(3000);
  644 |           await newPage.close();
  645 |           await page.waitForTimeout(3000);
  646 |           await page.reload();
  647 |         //   await page.locator("//div[normalize-space()='Paytm for Business']").click();
  648 |         await page.waitForLoadState();
  649 |         const paytmBusiness = page.locator("//div[normalize-space()='Paytm for Business']");
  650 |               await expect(paytmBusiness).toBeVisible();
  651 |     await paytmBusiness.click();
  652 |           console.log("'Paytm for Business Button clicked");
  653 | })
  654 | 
  655 |      test("TC029: Radio button handling using Playwright" ,  async ({page})=>{
  656 | 
  657 |           await page.goto("https://paytm.com/recharge");
  658 |         //   await page.waitForTimeout(3000);
  659 |           //input[id='radio0'];//div[@class='MGxf']/label[text()='Postpaid'];//label[text()='Postpaid'];//input[@id='radio1']/..
  660 |           await page.locator("//div[@class='MGxf']/label[text()='Postpaid']").click();
  661 |           //await page.waitForTimeout(3000);
  662 |           await expect(page.locator("//input[@id='radio1']/..")).toBeChecked();
  663 |           //div>label._3M_F;//label[@class='_3M_F']
  664 |           await page.locator("//label[text()='Prepaid']").click();
  665 |           //await page.waitForTimeout(3000);
  666 |           await expect(page.locator("//label[text()='Prepaid']")).toBeChecked();
  667 |           await expect(page.locator("//label[text()='Postpaid']")).not.toBeChecked();
  668 |      })
  669 | 
  670 | 
  671 |           test("TC030: Radio button handling using Playwright part-2" ,  async ({page})=>{
  672 |             //this test will fail due to the locator used
  673 |         //Key point: check() should target the actual <input type="radio">, not the <label>'s <i> styling element.
  674 |           await page.goto("https://paytm.com/recharge");
  675 |           await page.waitForTimeout(3000);
  676 |           //Key point: check() should target the actual <input type="radio">, not the <label>'s <i> styling element.
  677 |           //div[class='MGxf']>label>i[class='_3DxO']:nth-child(2) - results in 2 elements match so used xpath traversing
> 678 |           await page.locator("div[class='MGxf']>label>i[class='_3DxO']:nth-child(2)").check();
      |                                                                                       ^ Error: locator.check: Error: strict mode violation: locator('div[class=\'MGxf\']>label>i[class=\'_3DxO\']:nth-child(2)') resolved to 2 elements:
  679 |           //await page.waitForTimeout(3000);
  680 |           await expect(page.locator("div[class='MGxf']>label>i[class='_3DxO']:nth-child(2)")).toBeChecked();
  681 |           await page.waitForTimeout(3000);
  682 |           //label[class='_3M_F']>i[class='_3DxO']:nth-child(2)
  683 |           await page.locator("label[class='_3M_F']>i[class='_3DxO']:nth-child(2)").check()
  684 |           await page.waitForTimeout(3000);
  685 |           await expect(page.locator("label[class='_3M_F']>i[class='_3DxO']:nth-child(2)")).toBeChecked();
  686 |           await expect(page.locator("div[class='MGxf']>label>i[class='_3DxO']:nth-child(2)")).not.toBeChecked();
  687 | 
  688 |      })
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
```