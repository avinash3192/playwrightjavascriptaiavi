import { test, expect } from '@playwright/test';

test('test @record' , async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('L');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Learn ');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Learn P');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Learn Playwright ');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Learn Playwright MCP');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('P');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Practice ');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Practice P');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Practice Playwright automation');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('W');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Write automated tests');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
});

