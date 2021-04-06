export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const createRegexp = (str) => {
  const regexp = [];
  Array.from(str.toLowerCase().replace(/[^a-z]/g, ``)).forEach((letter) => regexp.push(`[${letter}]`));
  return regexp;
};

export const filterArray = (str, array) => {
  let regexp = createRegexp(str);
  let newArr = [];
  while (newArr.length === 0) {
    let reg = new RegExp(`^${regexp.join(``)}`, `g`);
    array.forEach((it) => {
      if (it.title.toLowerCase().match(reg)) {
        newArr.push(it);
      }
    });
    regexp.pop();
    if (regexp.length === 0) {
      break;
    }
  }
  return newArr;
};
