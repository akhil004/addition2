module.exports.add = (a,b) => {
    return a + b;
}
module.exports.addThreeDigit = (a,b,c) => {
    return a + b + c;
}


/*** Adsd numbersin an array ***/

module.exports.addArray = (c) => {
    sum = 0;
    c.forEach(function(value, index){
        sum += value;
    });
    return sum;
}