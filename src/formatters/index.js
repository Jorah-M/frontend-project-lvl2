import plain from './plain.js';
import stylish from './stylish.js';
import json from './json.js';

const formatters = {
  json,
  plain,
  stylish,
};

export default (data, format) => formatters[format](data);
