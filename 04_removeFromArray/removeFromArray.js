const removeFromArray = function(array, ...strings) {

    for (let i = 0; i < strings.length; i++) {

        let value = strings[i];
        const start = array.indexOf(value);
        if (start == -1) continue;
        const removedItems = array.splice(start, 1);

    }

    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
