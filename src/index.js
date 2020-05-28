import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import genDiff from './diff.js';
import stylish from './formaters/stylish.js';

const parseFile = (filePath) => {
  const fileExtName = path.extname(filePath).slice(1);
  const fileData = fs.readFileSync(path.resolve(filePath), 'utf-8');
  return parse(fileExtName, fileData);
};

const getDifference = (path1, path2) => {
  const beforeData = parseFile(path1);
  const afterData = parseFile(path2);
  return stylish(genDiff(beforeData, afterData));
};

export default getDifference;
