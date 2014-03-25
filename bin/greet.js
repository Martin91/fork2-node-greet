#! /usr/bin/env node

// require folders as modules
// http://nodejs.org/api/modules.html#modules_folders_as_modules
greet = require('greet');
var parseArgs = require('minimist');

var argv = parseArgs(process.argv);
console.log(greet(argv._[2], argv.drunk));
