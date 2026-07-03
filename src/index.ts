#!/usr/bin/env node

import { getArgs } from "./cli/args.js";
import { parseArgs } from "./cli/parse.js";

const cli = parseArgs(getArgs());

console.log(cli);
