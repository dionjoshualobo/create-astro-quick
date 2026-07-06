import type { CliArgs } from "./types.js";

export function parseArgs(args: string[]): CliArgs {
  const flags = args.filter(arg => arg.startsWith("-"));
  const location = args.find(arg => !arg.startsWith("-"));

  return {
    ...(location !== undefined && { location }),
    flags,
  };
}
