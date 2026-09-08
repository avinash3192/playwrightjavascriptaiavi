import {After,Given,When,Then,setDefaultTimeout} from '@cucumber/cucumber';
import {expect } from '@playwright/test';
import playwright from 'playwright';
import 'dotenv/config';
import {LoginPage} from '../../POM/LoginPage.js';

setDefaultTimeout(20000);


//from Cucumber library
After(async function(){
    if(this.browser){
        await this.browser.close();
    }
});

Given('I am in login page of saucedemo', async function(){
    this.browser = await playwright.chromium.launch({headless: false});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.loginPage = new LoginPage(this.page);
    await this.loginPage.goToLoginPageUrl();
});



When('I enter valid username', async function(){
    await this.loginPage.enterUsername();
});

When('I enter valid password', async function(){
    await this.loginPage.enterPassword();
    await this.page.waitForTimeout(5000);
});


When('I click on login button',async function(){
    await this.loginPage.clickLoginButton();

});

When('I enter valid invalid username',async function(){
    await this.loginPage.InvalidUsername('invalid_user')
});



Then('user should get error message', async function(){
    let actualErrorText = await this.loginPage.getLoginErrorMessage();
         const expectedErrorText1 = "Epic sadface: Username and password do not match any user in this service";
         const expectedErrorText2 = "do not match any user";

         //usin .toBe() to check if the actual error message is equal to the expected error message
         expect(expectedErrorText1).toBe(actualErrorText);

         //using the locator to check if the error message is visible
    await expect(await this.loginPage.getLoginErrorLocator()).toBeVisible();

    //using  ?.includes() to check if the actual error message contains the expected error message
    if (actualErrorText?.includes(expectedErrorText2)) {
        console.log("Error message is as expected.");
    } else {
        throw new Error(`Expected error message: ${expectedErrorText2}, but found: ${actualErrorText}`);
    }
});

When('I enter username {string} and password {string}', async function(username, password){
    await this.loginPage.enterUsername(username);
    await this.loginPage.enterPassword(password);
});

//is this approach recommended? or should we use the above approach to check for error message text?
Then('user should get sandeep defined error message', async function () {
    const errorMessage = this.page.locator('[data-test="error"]');
    await errorMessage.waitFor({ state: 'visible', timeout: 15000 });

    const text = await errorMessage.textContent();
    if (!text || !text.toLowerCase().includes('do not match')) {
        throw new Error(`Expected login error message but found: ${text ?? 'empty text'}`);
    }
});
