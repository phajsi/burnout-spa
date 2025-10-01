import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

// Basic smoke test to ensure the app renders and Tailwind classes resolve.
describe("App smoke test", () => {
  it("renders root layout with Tailwind class", () => {
    const { container } = render(<App />);
    const rootDiv = container.querySelector("div.min-h-screen");
    expect(rootDiv).toBeTruthy();
    // Check for a class we applied
    expect(rootDiv?.className).toContain("bg-brand-teal");
  });
});
