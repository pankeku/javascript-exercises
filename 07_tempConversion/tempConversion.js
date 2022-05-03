const ftoc = function(fahrenheit) {

  let result = (fahrenheit - 32) * 0.5556;
  console.log(`Before rounding: ${result}`);

  result = roundedToFixed(result, 1);

  result = parseFloat(result.toString());
 
  console.log(result);

  return result;

};

const ctof = function(celsius) {

  let result = (celsius * 1.8) + 32;
  console.log(`Before rounding: ${result}`);

  result = roundedToFixed(result, 1);

  result = parseFloat(result.toString());
 
  console.log(result);

  return result;

};

function roundedToFixed(input, digits){
  let rounded = Math.pow(10, digits);
  return (Math.round(input * rounded) / rounded).toFixed(digits);
}


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
