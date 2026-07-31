import { describe, it, expect, beforeEach } from "vitest"
import { render } from "@testing-library/react"
import App from "../App"

// Basic smoke test to ensure the app renders and Tailwind classes resolve
// for the burnout-in-tech route tree only.
describe("App smoke test", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/")
  })

  it("renders the burnout-in-tech layout with Tailwind class", () => {
    window.history.pushState({}, "", "/burnout-in-tech")
    const { container } = render(<App />)
    const rootDiv = container.querySelector("div.min-h-screen")
    expect(rootDiv).toBeTruthy()
    // Check for a class we applied
    expect(rootDiv?.className).toContain("bg-brand-teal")
  })

  it("renders the root Home page without the Tailwind layout wrapper", () => {
    const { container } = render(<App />)
    expect(container.querySelector("div.min-h-screen")).toBeNull()
  })
})
