import { test, expect } from "@playwright/test";

test.describe("login functionality", () => {
  test.beforeEach("go to login page", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("h1")).toHaveText("CURA Healthcare Service");

    // clicking on make appointment link
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("please login to make")).toBeVisible();
  });

  test("user should login successfully", async ({ page }) => {
    // navigate to the url and assert title and header text

    // +ve login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    // assertions
    await expect(page.locator("h2")).toContainText("Make Appointment");
  });

  test(" should prevent login with incorrect creds", async ({ page }) => {
    // -ve login
    await page.getByLabel("Username").fill("John cena");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();

    // assertions
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid."
    );
  });
});
