const repeatString = function(word,times) {
    if (times < 0) "ERROR";
    let string = "hey"
    for (let i = 0; i < times; i++){
        string += word;
    }return string;
};

// Do not edit below this line
module.exports = repeatString;
