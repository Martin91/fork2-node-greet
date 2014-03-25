#! /usr/bin/env node

// require folders as modules
// http://nodejs.org/api/modules.html#modules_folders_as_modules
greet = require('greet');

name = process.argv[2];
console.log(greet(name));
