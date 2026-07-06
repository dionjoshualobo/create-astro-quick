#!/usr/bin/env node

import { getArgs } from "./cli/args.js";
import { parseArgs } from "./cli/parse.js";
import { askProjectName, askTargetDirectory } from "./cli/prompts.js"

async function main() {
  const cli = parseArgs(getArgs());
  
  const projectName = await askProjectName(cli.projectName);

  const targetDirectory = await askTargetDirectory();

  console.log({
    projectName,
    targetDirectory,
  });

}

main();
