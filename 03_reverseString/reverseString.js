const reverseString = function(text) {

let textToArray = text.split("");

let result = ``;


for (let i = textToArray.length - 1; i >= 0; i--) {
    result += textToArray[i];
}


return result;

};

// Do not edit below this line
module.exports = reverseString;
