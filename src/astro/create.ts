import { execa } from "execa";

export async function createAstroProject(
  location: string,
  template: "basics" | "blog" | "starlight" | "minimal"
): Promise<void> {
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
