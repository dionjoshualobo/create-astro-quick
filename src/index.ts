#!/usr/bin/env node

import { getArgs } from "./cli/args.js";
import { parseArgs } from "./cli/parse.js";
import { askProjectLocation} from "./cli/prompts.js"

async function main() {
  const cli = parseArgs(getArgs());
  
  const location = await askProjectLocation(cli.location);

  console.log({
    location,
  });

}

main();
