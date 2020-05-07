#!/usr/bin/env node

import program from 'commander';
import diff from '../index.js';
import { version } from '../../package.json';

program
.name('gendiff')
.description('Compares two configuration files and shows a difference.')
.version(version)
.option('-f, --format [type]', 'output format')
.arguments('<first>, <second>')
.action(diff);

program.parse(process.argv);

