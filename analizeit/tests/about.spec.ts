import { expect, test } from "@playwright/test";

test("strona O mnie ma redakcyjną hierarchię, formularz i ambient process flow", async ({ page }) => {
  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true }),
    });
  });

  await page.goto("/o-mnie");

  await expect(page.getByRole("heading", { level: 1, name: "Radosław Begej" })).toBeVisible();
  await expect(page.getByRole("img", { name: "Radosław Begej" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Najpierw chcę wiedzieć/ })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Jak pracuję" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Technologie" })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Opisz proces/ })).toBeVisible();

  await expect(page.locator(".page-breadcrumb, .about-toolkit, .expertise-map__number")).toHaveCount(0);
  await expect(page.locator(".ambient-process")).toHaveCount(1);

  const jumpToForm = page.getByRole("link", { name: /Napisz wiadomość/ });
  await expect(jumpToForm).toBeVisible();
  await jumpToForm.focus();
  await expect(jumpToForm).toBeFocused();

  await page.getByLabel("Imię i nazwisko").fill("Jan Kowalski");
  await page.getByLabel("E-mail").fill("jan@example.com");
  await page.getByLabel("O czym porozmawiamy?").fill(
    "Chcemy uporządkować proces akceptacji kosztów i integrację z ERP.",
  );
  await page.getByLabel(/Zapoznałem/).check();
  await page.getByRole("button", { name: /Wyślij wiadomość/ }).click();

  await expect(
    page.getByText("Wiadomość została wysłana. Odpowiem na podany adres e-mail."),
  ).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  expect(hasHorizontalOverflow).toBe(false);
});
