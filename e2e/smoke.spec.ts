import { test, expect } from "@playwright/test"

test("home page renders Learn More link", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("link", { name: "Learn More" })).toBeVisible()
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
