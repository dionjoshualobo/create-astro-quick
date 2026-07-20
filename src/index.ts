#!/usr/bin/env node

import { getArgs } from "./cli/args.js";
import { parseArgs } from "./cli/parse.js";
import { askProjectLocation, 
         askTemplate, 
} from "./cli/prompts.js"
import { createAstroProject } from "./astro/create.js";
import { ExecaError } from "execa";

async function main() {
  const cli = parseArgs(getArgs());
  
  const location = await askProjectLocation(cli.location);

  const template = await askTemplate();

  await createAstroProject(location, template);

}

try {
  await main();
} catch (error) {
  if (error instanceof ExecaError) {
    console.error('\nFailed to create Astro Project.');
    console.error(error.shortMessage);
  } else {
    console.error(error);
  }
  
  process.exit(1);
}
