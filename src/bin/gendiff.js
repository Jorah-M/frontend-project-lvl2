#!/usr/bin/env node

import program from 'commander';
import diff from '../index.js';

program
.description('Compares two configuration files and shows a difference.')
.version('1.0.0')
.option('-f, --format [type]', 'output format')
.arguments('<first>, <second>')
.action(diff);

program.parse(process.argv);

