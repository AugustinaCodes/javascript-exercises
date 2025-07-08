const fibonacci = function (number) {
  let arr = [0, 1];

  if (number === 1) {
    return arr;
  } else if (number < 0) {
    return "OOPS"
  }

  for (let i = 2; i <= number; i++) {
    const value = arr[i - 1] + arr[i - 2];
    arr.push(value);
  }

  return arr[number];
};

console.log(fibonacci(5));

// Do not edit below this line
module.exports = fibonacci;
