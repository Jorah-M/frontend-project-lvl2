#!/usr/bin/env node

import program from 'commander';
// eslint-disable-next-line import/extensions
import getDifference from '../index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.2')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<firstConfig>, <secondConfig>')
  .action(
    (firstConfig, secondConfig) => {
      const result = getDifference(firstConfig, secondConfig, program.format);
      // eslint-disable-next-line no-console
      console.log(result);
    },
  )
  .parse(process.argv);
