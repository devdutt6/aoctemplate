#!/usr/bin/env node
// importing required modules.
const { join } = require('node:path');
const { mkdirSync, openSync, appendFileSync } = require('node:fs');
const { bold, yellow, blueBright, green, underline } = require("colorette");
// reading the folder name provided from cmd
let folder = process.argv[2] ?? "default_name";
// reading the process's absolute path
let path = join(process.cwd(), `${folder}`);

// creating the directory, input file and solution.js file
mkdirSync(path);
console.log(yellow(`Created directory ${bold(folder)}`), );
openSync(join(path, `input.txt`), 'w');
console.log(yellow(`Created a input file ${bold(`${folder}/input.txt`)}`));
openSync(join(path, `solution.js`), 'w');
console.log(yellow(`Created a solution file ${bold(`${folder}/solution.js`)}`));
appendFileSync(join(path, `solution.js`),
`exports.solution = (file) => {
  try{
    // write your solution here
    for( let line of file ){
\t\t\t
    }
    // ? return @here;
  }
  catch(err){
    console.log(err);
  }
};
`);
console.log(blueBright("Added the demo code..."));
console.log(green("Template created successfully."));
console.log(`now\n${underline("cd")} into the directory ${bold(folder)}`);