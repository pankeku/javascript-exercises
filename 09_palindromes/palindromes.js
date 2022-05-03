const palindromes = function (text) {

// 1. nuimt kablelius ir tarpus, palikt tik raides. 
// 2. reversint, returnint nauja stringa ir palygint su originalu

    text = text.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
    

    let reversed = text.split("").reverse().join("");

    console.log(`${text}\n${reversed}`)

    if (text === reversed) {
        return true;
    }

    return false;
    

};

// Do not edit below this line
module.exports = palindromes;
