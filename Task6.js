const toArray = (obj) => {
  const newArray = Object.keys(obj).map((key) => [key, obj[key]]);
  return newArray;
};

console.log(toArray({ a: 1, b: 2, c: 3 }));
