const fibonacci = function(number) {

if (typeof number === "string") {
        number = Number(number);
    }
    

if (number < 0) return "OOPS";

let first = 0;
let second = 1;
let result = 1;

    for (let i = 1; i < number; i++) {
        
        result = first + second;
        first = second;
        second = result;

    }

    return result;

};

// Do not edit below this line
module.exports = fibonacci;
