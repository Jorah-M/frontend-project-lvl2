import getDifference from '../src/index.js'
import path from 'path';
import fs from 'fs';

const getPath = (filename) => path.resolve('__tests__', 'fixtures', filename);
const plusExtension = (name, extension) => getPath(`${name}.${extension}`);
const extensions = ['json', 'yaml', 'ini'];

test ('stylish; all extensions', () => {
  extensions.forEach((extension) => {
    const realData = getDifference(plusExtension('before', extension), plusExtension('after', extension), 'stylish');
    const expectedData = fs.readFileSync(getPath('expectedStylish'), 'utf-8');

    expect(realData).toBe(expectedData);
  })
});

test ('plain; all extensions', () => {
  extensions.forEach((extension) => {
    const realData = getDifference(plusExtension('before', extension), plusExtension('after', extension), 'plain');
    const expectedData = fs.readFileSync(getPath('expectedPlain'), 'utf-8');

    expect(realData).toBe(expectedData);
  })
});

test ('json; all extensions', () => {
  extensions.forEach((extension) => {
    const realData = getDifference(plusExtension('before', extension), plusExtension('after', extension), 'json');
    const expectedData = fs.readFileSync(getPath('expectedJson'), 'utf-8');
  
    expect(realData).toBe(expectedData);
  })
});
