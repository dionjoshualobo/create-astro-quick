import { text, isCancel, cancel } from "@clack/prompts";

export async function askProjectName(
  projectName?: string,
): Promise<string> {
  if (projectName) {
    return projectName;
  }
  
  const value = await text({
    message: "Project name",
    placeholder: "my-astro-app",
});

  if (isCancel(value)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  return value;
}
