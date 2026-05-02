import { test, expect } from '@playwright/test';

test('login to Rahul Shetty Academy, add iPhone X to cart and verify checkout', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator('#password').fill('Learning@830$3mK2');
  await page.getByRole('radio', { name: 'User' }).check();
  await page.getByRole('checkbox', { name: /I Agree to the terms and conditions/ }).check();
  await page.locator('#signInBtn').click();

  await page.waitForURL(/.*shop/);

  const iphoneCard = page.locator('.card').filter({
    has: page.locator('h4.product-name', { hasText: 'iPhone X' }),
  }).first();
  await expect(iphoneCard).toBeVisible();
  await iphoneCard.locator('button:has-text("Add to Cart")').click();

  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('button', { name: 'Checkout' }).click();

  const cartTable = page.locator('table tbody');
  await expect(cartTable).toContainText('iPhone X');
});
