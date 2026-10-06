import { test, expect } from '../fixtures/fixtures.js';
test('Verify inventory page @fixturetest', async ({ loggedInPage }) => {

    await expect(
        loggedInPage.getByText('Products')
    ).toBeVisible();

});
