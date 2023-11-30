import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('check main content', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Check if the main content container is visible.
  const mainContent = await page.locator('.main-content');
  await expect(mainContent).toBeVisible();

  // Check if there is at least one article in the main content.
  const articles = await mainContent.locator('article');
  await expect(articles.count()).toBeGreaterThan(5);

  // Check if the first article has a specific class.
  const firstArticle = await articles.first();
  await expect(firstArticle).toHaveClass('featured-article');


});

