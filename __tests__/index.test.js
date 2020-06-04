import getDifference from '../src/index.js'
import path from 'path';
import fs from 'fs';
import { format } from 'url';

const getPath = (filename) => path.resolve('__tests__', 'fixtures', filename);
const plusExtension = (name, extension) => getPath(`${name}.${extension}`);
const extensions = ['json', 'yaml', 'ini'];
const formats = ['json', 'plain', 'stylish'];


test ('all formats & extensions test', () => {
    formats.forEach((format) => {
        extensions.forEach((extension) => {
            const realData = getDifference(plusExtension('before', extension), plusExtension('after', extension), format);
            console.log(format, extension)
            const expectedData = fs.readFileSync(getPath(`expected_${format}`), 'utf-8');

            expect(realData).toBe(expectedData);
        })
    })
})
