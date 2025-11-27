import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // navigation
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  // assertions
  await expect(page.locator('h1')).toBeVisible();
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  // fill the form
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
 // assertions
  await expect(page.locator('h2')).toContainText('Make Appointment');
});