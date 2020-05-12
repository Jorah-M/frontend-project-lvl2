import fs from 'fs';
import path from 'path';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

export default (first, second) => {
    const firstObject = JSON.parse(fs.readFileSync(getFullPath(first), "utf-8"));
    const secondObject = JSON.parse(fs.readFileSync(getFullPath(second), "utf-8"));

    let differencies = '{\n';
    const keysOf2 = Object.keys(secondObject);
    for (const [key, value] of Object.entries(firstObject)) {
        if (keysOf2.includes(key)) {
            if (value === secondObject[key]) {
                differencies += `    ${key} : ${value}\n`;
            } else {
                differencies += `  + ${key} : ${secondObject[key]}\n`;
                differencies += `  - ${key} : ${value}\n`;
            }
        } else {
            differencies += `  - ${key} : ${value}\n`;
        }
        delete secondObject[key];
    }
    for (const [key, value] of Object.entries(secondObject)) {
        differencies += `  + ${key} : ${value}\n`;
    }
    differencies += `}`;
    console.log(differencies);
    return differencies;
};