import diff from '../src/index.js'
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

test('flat files diff', () => {
    const path1 = path.resolve(__dirname, 'fixtures/before.json');
    const path2 = path.resolve(__dirname, 'fixtures/after.json');
    const testDiff = diff(path1, path2);

    const expectedFlatOutput = fs.readFileSync('__tests__/fixtures/expectFlat.txt', 'utf-8').trim();
    expect (testDiff).toBe(expectedFlatOutput);
})