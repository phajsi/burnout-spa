import { describe, it, expect } from "vitest";

// List of modules to test importability (add more as needed)
const modules = [
  () => import("../App"),
  () => import("../pages/Home"),
  () => import("../pages/Burnout"),
  () => import("../pages/SceneIntro"),
  () => import("../pages/Scene1"),
  () => import("../components/Button"),
  () => import("../components/Footer"),
  () => import("../components/Modal"),
  () => import("../components/ModalSection"),
  () => import("../components/Navigation"),
];

describe("Module import integrity", () => {
  for (const loader of modules) {
    const name = loader.toString().match(/\.\.(.*)["']/)?.[1] ?? "unknown";
    it(`imports ${name}`, async () => {
      const mod = await loader();
      expect(mod).toBeTruthy();
    });
  }
});
