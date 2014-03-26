greet = require('../lib/index')
parseArgs = require('minimist')

command = ->
  argv = parseArgs(process.argv)
  console.log(greet(argv._[2], argv.drunk))

module.exports = command
