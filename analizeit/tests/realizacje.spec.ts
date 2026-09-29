import { expect, test } from "@playwright/test";

test("lista procesów ma prostą hierarchię bez modułowych metadanych", async ({ page }) => {
  await page.goto("/realizacje");

  await expect(page.getByRole("heading", { level: 1, name: "Przykłady procesów." })).toBeVisible();
  await expect(page.locator(".process-list__item")).toHaveCount(6);
  await expect(page.getByRole("link", { name: /Faktury i KSeF/ })).toBeVisible();
  await expect(page.locator(".process-index__meta, .process-detail__step-number")).toHaveCount(0);

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  expect(hasHorizontalOverflow).toBe(false);
});

test("szczegół procesu pokazuje pełny przebieg bez dekoracyjnej numeracji", async ({ page }) => {
  await page.goto("/realizacje/faktury-i-ksef");

  await expect(page.getByRole("heading", { level: 1, name: "Faktury i KSeF" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Problem" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Model rozwiązania" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Przebieg procesu" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Integracje i automatyzacja" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Co ma się zmienić" })).toBeVisible();

  await expect(page.locator(".process-detail__steps > li")).toHaveCount(6);
  await expect(page.locator(".process-detail__step-number")).toHaveCount(0);
  await expect(page.getByText(/W procesie uczestniczą:/)).toBeVisible();
  await expect(page.getByText(/Technologie:/)).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  expect(hasHorizontalOverflow).toBe(false);
});
