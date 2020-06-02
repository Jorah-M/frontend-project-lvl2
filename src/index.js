import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import genDiff from './diff.js';
import formatter from './formatters/index.js';

const parseFile = (filePath) => {
  const fileExtName = path.extname(filePath).slice(1);
  const fileData = fs.readFileSync(path.resolve(filePath), 'utf-8');
  return parse(fileExtName, fileData);
};

const getDifference = (path1, path2, format) => {
  const beforeData = parseFile(path1);
  const afterData = parseFile(path2);
  return formatter(genDiff(beforeData, afterData), format);
};

export default getDifference;
