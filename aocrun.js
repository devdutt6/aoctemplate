#!/usr/bin/env node
// importing required modules.
const { join } = require('node:path');
const { readFileSync } = require('node:fs');

// reading absolute path of directory in which process is being executed.
let path = process.cwd();
// requiring the solution from solution file.
const { solution } = require(join(path, 'solution.js'));

// anonymous function
(async () => {
  try{
    // reading and spliting the file according to spliting characted
    let file = readFileSync(join(path, 'input.txt'), { encoding: 'utf-8' }).split(process.argv[2]);
    // loggging the solution
    console.log(await solution(file));
  }
  catch(err){
    // if error
    console.log(err);
  }
})();