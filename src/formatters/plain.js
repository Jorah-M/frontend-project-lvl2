const stringify = (data) => {
  if (typeof data === 'string') {
    return `'${data}'`;
  }
  if (typeof data === 'object') {
    return '[complex value]';
  }
  return data;
};

const makePath = (acc, name) => (acc.length !== 0 ? `${acc}.${name}` : name);

const plain = (items) => {
  const buildString = (data, path = '') => data.map(({
    state, name, newValue, oldValue, children,
  }) => {
    const key = makePath(path, name);
    switch (state) {
      case 'removed':
        return `Property '${key}' was removed`;
      case 'added':
        return `Property '${key}' was added with value: ${stringify(newValue)}`;
      case 'unmodified':
        return null;
      case 'compare':
        return buildString(children, key);
      case 'modified':
        return `Property '${key}' was updated. From ${stringify(oldValue)} to ${stringify(newValue)}`;
      default:
        throw new Error(`State ${state} is unknown!`);
    }
  }).filter((item) => item).join('\n');
  return buildString(items);
};

export default plain;
