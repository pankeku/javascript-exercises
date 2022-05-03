const getTheTitles = function(info) {
let titles = [];

for (element of info) {
    titles.push(element.title);
}

return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
