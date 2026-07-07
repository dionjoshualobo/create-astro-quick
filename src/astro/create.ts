import { execa } from "execa";

export async function createAstroProject(
  location: string,
): Promise<void> {
  console.log(`Creating Astro project in "${location}"...`);

  await execa("npm", ["create", "astro@latest", location], {
    stdio: "inherit",
  });
}
