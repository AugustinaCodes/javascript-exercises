const convertToCelsius = function(num) {
  return (num - 32) * 5/9
};

const convertToFahrenheit = function(num) {
  return (num * 9/5) + 32
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
