import { test, expect } from "@playwright/test"

test("home page renders introduction and working destinations", async ({
  page,
}) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Hi, I’m [Your name]."
  )
  await page.getByRole("navigation").getByRole("link", { name: "Blog" }).click()
  await expect(page.getByText("No posts published yet.")).toBeVisible()
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Travel" })
    .click()
  await expect(page.getByText("No travel stories published yet.")).toBeVisible()
  await page.getByRole("link", { name: "Back to home" }).click()
  await page.getByRole("link", { name: "Burnout in Tech" }).click()
  await expect(
    page.getByRole("heading", { name: "Burnout in Tech" })
  ).toBeVisible()
})

test("burnout page renders main heading", async ({ page }) => {
  await page.goto("/burnout-in-tech")
  await expect(
    page.getByRole("heading", { name: "Burnout in Tech" })
  ).toBeVisible()
})

test("intro page renders main heading", async ({ page }) => {
  await page.goto("/burnout-in-tech/intro")
  await expect(
    page.getByRole("heading", { name: "Introduction" })
  ).toBeVisible()
})

test("scene 1 page renders main heading", async ({ page }) => {
  await page.goto("/burnout-in-tech/scene-1")
  await expect(page.getByRole("heading", { name: "Scene 1" })).toBeVisible()
})
