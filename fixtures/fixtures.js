import { test as base, expect } from '@playwright/test';

export const test = base.extend({
    loggedInPage: async ({ page }, use) => {

        await page.goto('https://www.saucedemo.com/');

        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
        //await use(page) is particularly important: it passes the prepared page to the test.
        //use() as the boundary between fixture setup and the test.
        //Anything before await use() is setup.
        //Anything after await use() is teardown.   
        await use(page);
    }
});
//Makes that imported expect available to other files through your fixture file.
//export { expect } re-exports the imported Playwright expect so test files can import both the custom test and expect from the same fixture file.
export { expect };

// The flow is:
// test()
//    ↓
// loggedInPage fixture
//    ↓
// page fixture
//    ↓
// Navigate to SauceDemo
//    ↓
// Login
//    ↓
// await use(page)
//    ↓
// Test executes with logged-in page