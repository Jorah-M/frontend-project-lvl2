import parser from './parser.js';

export default (first, second) => {
  const firstObject = parser(first);
  const secondObject = parser(second);

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
