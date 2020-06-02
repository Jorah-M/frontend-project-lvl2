const tab = '  ';
const tabsCount = 2;

const convert = (data, indent) => {
  if ((typeof data !== 'object')) {
    return data;
  }
  return Object.entries(data).map(([key, value]) => `{\n${indent}      ${key}: ${value}\n${indent}  }`);
};

const stylish = (items) => {
  const buildsString = (data, indentCounter) => {
    const indent = tab.repeat(indentCounter);
    return data.map(({
      state, name, newValue, oldValue,
    }) => {
      switch (state) {
        case 'removed':
          return `${indent}- ${name}: ${convert(oldValue, indent)}`;
        case 'added':
          return `${indent}+ ${name}: ${convert(newValue, indent)}`;
        case 'unmodified':
          return `${indent}  ${name}: ${convert(oldValue, indent)}`;
        case 'compare':
          return `${indent}  ${name}: {\n${buildsString(newValue, indentCounter + tabsCount)}\n${indent}  }`;
        case 'modified':
          return `${indent}+ ${name}: ${convert(newValue, indent)}\n${indent}- ${name}: ${convert(oldValue, indent)}`;
        default:
          throw new Error(`State ${state} is unknown!`);
      }
    }).join('\n');
  };
  return `{\n${buildsString(items, 1)}\n}`;
};

export default stylish;
