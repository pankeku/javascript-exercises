const sumAll = function(begin, end) {

    let sum = 0;

    if (begin < 0 || end < 0) {
        return `ERROR`;
    } else if (typeof begin != "number" || typeof end != "number") {
        return `ERROR`;
    }

    if (begin > end) {
        let temp = 0;
        temp = begin;
        begin = end;
        end = temp;
    }

    for (; begin <= end; begin++) {
        sum += begin;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
