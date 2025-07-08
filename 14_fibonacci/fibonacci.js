const fibonacci = function(number) {
    let arr = []

    for (let i = 1; i <= number; i++) {
        console.log(i);
        
        arr.push(i)
    }

    return arr

};

console.log(fibonacci(1));


// Do not edit below this line
module.exports = fibonacci;
