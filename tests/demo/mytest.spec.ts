import { test, expect } from "@playwright/test";

test("basic validation", async ({ page }) => {
  //Navigation to URL
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  //assertion for title
  await expect(page).toHaveTitle("CURA Healthcare Service");

  //assert header text file
  await expect(page.locator("h1")).toHaveText("CURA Healthcare Service");
}),
  test("string", { tag: "@smoke" }, async ({ page }, testinfo) => {
    // this is a test function
    // test stpes
  }),
  test("web page naviagion", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    // assertions
    let makeAppoinment = page.getByRole("link", { name: "Make Appointment" });
    await makeAppoinment.click();
    await expect(page.getByText("Please login to make")).toBeVisible();
  });
