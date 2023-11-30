import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://localhost:9323/');

  // Expect a title "to contain" a substring.
  await expect(page.locator("#counter").count).toBeGreaterThan(5);
})