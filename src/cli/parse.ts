import type { CliArgs } from "./types.js";

export function parseArgs(args: string[]): CliArgs {
  const flags = args.filter(arg => arg.startsWith("-"));
  const projectName = args.find(arg => !arg.startsWith("-"));

  return {
    ...(projectName !== undefined && { projectName }),
    flags,
  };
}
