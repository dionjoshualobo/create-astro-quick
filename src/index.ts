#!/usr/bin/env node

import { getArgs } from "./cli/args.js";
import { parseArgs } from "./cli/parse.js";
import { askProjectLocation} from "./cli/prompts.js"
import { createAstroProject } from "./astro/create.js";

async function main() {
  const cli = parseArgs(getArgs());
  
  const location = await askProjectLocation(cli.location);

  await createAstroProject(location);

}

main();
