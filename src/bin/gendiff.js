#!/usr/bin/env node

import program from 'commander';
import diff from '../index.js';

program
.name('gendiff')
.description('Compares two configuration files and shows a difference.')
.version('1.0.2')
.option('-f, --format [type]', 'output format')
.arguments('<first>, <second>')
.action(diff);

program.parse(process.argv);

