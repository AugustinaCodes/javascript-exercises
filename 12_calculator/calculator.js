const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  return arr.reduce((sum, n) => sum + n, 0)
};

const multiply = function(arr) {
  return arr.reduce((product, number) => product * number)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(number) {
  if (number === 0) {
    return 1
  }
  let answer = 1
  for (let i = 1; i <= number; i++) {
    answer *= i
  }
  return answer
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
