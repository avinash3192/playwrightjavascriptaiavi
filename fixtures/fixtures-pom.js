import { test as base,expect } from '@playwright/test';
import LoginPage from '../POM/LoginPage.js';
import InventoryPage from '../POM/InventoryPage.js';

export const test = base.extend({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goToLoginPageUrl(); 
        await use(loginPage);
    },

    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    }
});

export { expect } ;
