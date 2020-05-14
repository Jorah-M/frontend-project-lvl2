import diff from '../src/index.js'
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

test('flat json files diff', () => {
    const path1 = path.resolve(__dirname, 'fixtures/before.json');
    const path2 = path.resolve(__dirname, 'fixtures/after.json');
    const testDiff1 = diff(path1, path2);

    const expectedFlatOutput = fs.readFileSync('__tests__/fixtures/expectFlat.txt', 'utf-8').trim();
    expect (testDiff1).toBe(expectedFlatOutput);
})

test('flat yaml files diff', () => {
    const path3 = path.resolve(__dirname, 'fixtures/before.yml');
    const path4 = path.resolve(__dirname, 'fixtures/after.yml');
    const testDiff2 = diff(path3, path4);

    const expectedFlatOutput = fs.readFileSync('__tests__/fixtures/expectFlat.txt', 'utf-8').trim();
    expect (testDiff2).toBe(expectedFlatOutput);
})