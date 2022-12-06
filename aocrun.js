#!/usr/bin/env node
// importing required modules.
const { join } = require('node:path');
const { readFileSync } = require('node:fs');
const { blue, bold, white, yellow, dim, whiteBright, red, greenBright } = require("colorette");

// reading absolute path of directory in which process is being executed.
// requiring the solution from solution file.
try{
  let path = process.cwd();
  const { solution } = require(join(path, 'solution.js'));
  console.log(yellow(bold("Starting the execution..")));
  console.log(dim(white("====================================================")));
  console.time(blue('Elapsed'));
  // anonymous function
  (async () => {
    try{
      // reading and spliting the file according to spliting characted
      let file = readFileSync(join(path, 'input.txt'), { encoding: 'utf-8' }).split(process.argv[2] ?? '\n');
      // loggging the solution
      console.log(whiteBright(await solution(file)));
    }
    catch(err){
      // if error
      console.log(err);
    }
  })();
  console.log(dim(white("====================================================")));
  console.timeEnd(blue('Elapsed'));
}
catch(err){
  if(err.code.toString() === "MODULE_NOT_FOUND" ){
    console.log(red(`Cannot find the ${bold("solution.js")} in current directory.`));
    console.log(greenBright("Hint: "), whiteBright('Are you sure you are in right directory!'));
  }
  else{
    console.error(err);
  }
}
