const leapYears = function(year) {

    if (year % 4 == 0) {
        if (year % 100 == 0 && year % 400 != 0) {
            console.log(`${year} - not a leap year.`);
            return false;
        } else {
            console.log(`${year} - is a leap year.`);
            return true;
        }
    } else {
        console.log(`${year} - not a leap year.`);
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
