import fs from 'fs';
import path from 'path';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

export default (first, second) => {
  const firstObject = JSON.parse(fs.readFileSync(getFullPath(first), 'utf-8'));
  const secondObject = JSON.parse(fs.readFileSync(getFullPath(second), 'utf-8'));

  let differencies = '{\n';
  const keysOf2 = Object.keys(secondObject);

  Object.entries(firstObject).forEach(([key, value]) => {
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
  });

  Object.entries(secondObject).forEach(([key, value]) => {
    differencies += `  + ${key} : ${value}\n`;
  });

  differencies += '}';
  console.log(differencies);
  return differencies;
};
