import {test,expect,chromium} from '@playwright/test'

test('demo test playwright',async ({browser}) => {
    // const browser = await chromium.launch({headless:false});
    // const context = await browser.newContext();
    const newContext = await browser.newContext();
    const page = await newContext.newPage();
    // const newContext1 = await browser.newContext();
    // const page1 = await newContext1.newPage();
    // const newContext2 = await browser.newContext();
    // const page2 = await newContext2.newPage();
await page.goto('https://www.saucedemo.com/');
// await page1.goto('https://www.google.com/');
// await page2.goto('https://www.jquery.com/');
console.log  (page.url());
console.log(await page.title())
await page.getByLabel('Username').pressSequentially('standard_user');
const passField =  page.getByLabel('Password');
await passField.fill('secret_sauce');
await page.waitForSelector("#user-name");
await expect.soft(page.getByLabel('Username')).toHaveAttribute('placeholder','Username');
await expect(page.locator('.form_group').first()).toHaveClass('form_group');
await page.keyboard.press('Enter');
} )