let i = 0;
let count = 0;
const countTrue = (n) => {
  if (i <= n.length - 1) {
    if (n[i] === true) {
      count++;
    }
    i++;
    countTrue(n);
  }
  return count;
};

console.log(countTrue([true, false, true, true, false]));
