import path from 'path';
import fs from 'fs';
import getDifference from '../src/index.js';

const getFullPath = (filename, extension) => `${path.resolve('__tests__', 'fixtures', filename)}.${extension}`;
const extensions = ['json', 'yaml', 'ini'];
const formats = ['json', 'plain', 'stylish'];


test('all formats & extensions test', () => {
  formats.forEach((format) => {
    extensions.forEach((extension) => {
      const realData = getDifference(getFullPath('before', extension), getFullPath('after', extension), format);
      const expectedData = fs.readFileSync(`__tests__/fixtures/expected_${format}`, 'utf-8');

      expect(realData).toBe(expectedData);
    });
  });
});
