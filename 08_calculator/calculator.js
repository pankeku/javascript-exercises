const add = function(number1, number2) {

  return number1 + number2;
  
};

const subtract = function(number1, number2) {
	
  return number1 - number2;

};

const sum = function(numbers) {

let suma = 0;

  for (let i = 0; i <numbers.length; i++) {

    suma = suma + numbers[i];

  }

  return suma;
	
};

const multiply = function(numbers) {

  let result = 1;

  for (number of numbers) {
    result = result * number;
  }

  return result;

};

const power = function(number, power) {
	
  let result = number;

  for (let i = 1; i < power; i++) {

    result = result * number;
  
  }

  return result;

};

const factorial = function(number) {

  let result = 1;

  for (let i = 1; i <= number; i++) {

    result = result * i;

  }

  return result;
	
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
