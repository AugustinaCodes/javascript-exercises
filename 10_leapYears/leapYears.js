const leapYears = function(year) {

    if(year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
        return true
    } else {
        return false
    }
};

console.log(leapYears(2000)); //true
console.log(leapYears(1984)); //true
console.log(leapYears(1900)); //false
console.log(leapYears(1600)); //true


// Do not edit below this line
module.exports = leapYears;
