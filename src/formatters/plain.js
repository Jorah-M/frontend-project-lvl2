const convert = (data) => {
  if ((typeof data === 'string')) {
    return `'${data}'`;
  }
  if ((typeof data === 'object')) {
    return '[complex value]';
  }
  return data;
};

const makePath = (acc, name) => (acc.length !== 0 ? `${acc}.${name}` : name);

const plain = (items) => {
  const buildString = (data, path = '') => data.map(({
    state, name, newValue, oldValue,
  }) => {
    const key = makePath(path, name);
    switch (state) {
      case 'removed':
        return `Property '${key}' was removed`;
      case 'added':
        return `Property '${key}' was added with value: ${convert(newValue)}`;
      case 'unmodified':
        return false;
      case 'compare':
        return buildString(newValue, key);
      case 'modified':
        return `Property '${key}' was updated. From ${convert(oldValue)} to ${convert(newValue)}`;
      default:
        throw new Error(`State ${state} is unknown!`);
    }
  }).filter((item) => item).join('\n');
  return buildString(items);
};

export default plain;