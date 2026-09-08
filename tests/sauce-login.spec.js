import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test.only('Sauce Demo login test', async ({ page }) => {
  const jsonPath = path.resolve(__dirname, '../testdata/sauce-demo-user.json');
  const userData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  const url = userData.url;
  const username = userData.username;
  const password = userData.password;

  await page.goto(url);
  await expect(page).toHaveURL(/saucedemo\.com/);

  await page.locator('[data-test="username"]').fill(username);
  await page.locator('[data-test="password"]').fill(password);
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});
