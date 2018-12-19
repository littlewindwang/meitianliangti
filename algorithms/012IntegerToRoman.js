/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var result = '';

    var i=0;

    while(num!==0){
        console.log(num);
        while(num>=numArr[i]){
            num-=numArr[i];
            result+=romanArr[i];
        }
        i++
    }
    return result;
};
