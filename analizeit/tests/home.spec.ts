import { expect, test } from "@playwright/test";

test("strona główna zachowuje hierarchię i mieści się w widoku", async ({ page }, testInfo) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const skipLink = page.getByRole("link", { name: "Przejdź do treści" });
  expect(await skipLink.evaluate(element => element.getBoundingClientRect().bottom)).toBeLessThanOrEqual(0);
  await page.keyboard.press("Tab");
  await expect(skipLink).toBeFocused();
  await expect.poll(async () => skipLink.evaluate(element => element.getBoundingClientRect().top)).toBeGreaterThanOrEqual(0);
  await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
  await expect.poll(async () => skipLink.evaluate(element => element.getBoundingClientRect().bottom)).toBeLessThanOrEqual(0);
  const deliverySection = page.getByRole("region", { name: /Najpierw proces/i });
  await expect(deliverySection).toBeVisible();
  await expect(deliverySection.getByText("Proces przed formularzem")).toBeVisible();
  await expect(deliverySection.locator("img, ol")).toHaveCount(0);

  await deliverySection.scrollIntoViewIfNeeded();
  await page.evaluate(() => (document.activeElement as HTMLElement | null)?.blur());
  await deliverySection.screenshot({
    animations: "disabled",
    path: testInfo.outputPath("home-delivery.png"),
    // Element screenshots can repaint fixed elements inside the clip; the behavior
    // of the skip link is verified above before excluding it from visual evidence.
    style: ".skip-link { visibility: hidden !important; }",
  });

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );

  expect(hasHorizontalOverflow).toBe(false);
});
