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

export async function askTemplate(): Promise<"basics" | "blog" | "starlight" | "minimal"> {
  const template = await select({
    message: "How would you like to start your new project?",
    options: [
      {
        value: "basics",
        label: "A basic, helpful starter project (recommended)",
      },
      {
        value: "blog",
        label: "Use blog template",
      },
      {
        value: "starlight",
        label: "Use docs (Starlight) template",
      },
      {
        value: "minimal",
        label: "Use minimal (empty) template",
      },
    ],
  });

  if (isCancel(template)) {
    cancel("Operation cancelled");
    process.exit(0);
  }
  
  return template;
}
