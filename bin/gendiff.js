#!/usr/bin/env node

import program from 'commander';


program
.description('Compares two configuration files and shows a difference.')
.version('1.0.0')
.arguments('<firstConfig>, <secondConfig>')
.option('-f, --format [type]', 'output format');

program.parse(process.argv);
