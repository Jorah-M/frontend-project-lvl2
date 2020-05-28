import _ from 'lodash';


const genDiff = (beforeDat, afterDat) => _.union(_.keys(beforeDat), _.keys(afterDat)).map((key) => {
  if (!_.has(afterDat, key)) {
    return {
      state: 'removed', name: key, oldValue: beforeDat[key],
    };
  }

  if (!_.has(beforeDat, key)) {
    return {
      state: 'added', name: key, newValue: afterDat[key],
    };
  }

  if (beforeDat[key] === afterDat[key]) {
    return {
      state: 'unmodified', name: key, oldValue: beforeDat[key],
    };
  }

  if ((typeof beforeDat[key] === 'object') && (typeof afterDat[key] === 'object')) {
    return {
      state: 'compare', name: key, newValue: genDiff(beforeDat[key], afterDat[key]),
    };
  }

  return {
    state: 'modified', name: key, newValue: afterDat[key], oldValue: beforeDat[key],
  };
});


export default genDiff;
