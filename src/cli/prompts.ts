import { text, isCancel, cancel, select } from "@clack/prompts";

export async function askProjectLocation(
  location?: string,
): Promise<string> {
  if (location) {
    return location;
  }
  
  const value = await text({
    message: "Where should we create your project?",
    placeholder: "./my-project",
});

  if (isCancel(value)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  return value;
}

export async function askTargetDirectory(): Promise<"current" | "new"> {
  const value = await select({
    message: "Where should the project be created?",
    options: [
      {
        value: "new",
        label: "Create a new folder",
      },
      {
        value: "current",
        label: "Use the current directory",
      },
    ],
  });

  if (isCancel(value)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }

  return value;
}
