#!/usr/bin/env node

import { getArgs } from "./cli/args.js";
import { parseArgs } from "./cli/parse.js";
import { askProjectName } from "./cli/prompts.js"

async function main() {
  const cli = parseArgs(getArgs());
  
  const projectName = await askProjectName(cli.projectName);

  console.log(projectName);

}

main();
