import { execa } from "execa";
import type { AstroOptions } from "./types.js";

export async function createAstroProject(
  options: AstroOptions,
): Promise<void> {
  const { location, template } = options;
  console.log(`Creating Astro project in "${location}"...`);

  await execa("npm", [
    "create", 
    "astro@latest", 
    location,
    "--",
    "--template",
    template,
  ], {
    stdio: "inherit",
  });
}
