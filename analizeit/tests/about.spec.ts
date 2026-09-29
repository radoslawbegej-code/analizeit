import { expect, test } from "@playwright/test";

test("strona O mnie ma prostą redakcyjną hierarchię", async ({ page }) => {
  await page.goto("/o-mnie");

  await expect(page.getByRole("heading", { level: 1, name: "Radosław Begej" })).toBeVisible();
  await expect(page.getByRole("img", { name: "Radosław Begej" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Najpierw chcę wiedzieć/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Jak pracuję" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Technologie" })).toBeVisible();

  await expect(page.locator(".page-breadcrumb, .about-toolkit, .expertise-map__number")).toHaveCount(0);

  const contact = page.getByRole("link", { name: /Porozmawiajmy/ }).first();
  await expect(contact).toBeVisible();
  await contact.focus();
  await expect(contact).toBeFocused();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  expect(hasHorizontalOverflow).toBe(false);
});
