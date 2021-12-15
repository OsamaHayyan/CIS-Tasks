const makePlusFunction = (n) => {
  return function plusNumber(num) {
    return n + num;
  };
};

const plusTen = makePlusFunction(5);

plusTen(10);
