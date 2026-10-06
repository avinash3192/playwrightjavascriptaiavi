import { test, expect } from '../fixtures/fixtures-pom.js';

test('Verify inventory @pominventory', async ({ loginPage, inventoryPage }) => {

    await loginPage.validLogin();

    await expect(
        inventoryPage.getSwagLabsLogoLoc()
    ).toBeVisible();

//or

//async function getSwagLabsLogo() return Promise<Locator> , we need to use 'await inventoryPage.getSwagLabsLogo()' which resolves Promise<Locator> to Locator
//then expect(Locator).toBeVisible()
//Playwright's toBeVisible() itself is asynchronous, so you use the outer await.
await expect(
    await inventoryPage.getSwagLabsLogo()
).toBeVisible();
});
