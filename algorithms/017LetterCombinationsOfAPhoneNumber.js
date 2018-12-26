/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let result;
    let [first,...others]=digits;
    const digitMap={
        '2':['a','b','c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }



    return others.reduce((total,currentValue)=>{
        console.log(total);
        result=[];
        total.forEach(a=>{
            digitMap[currentValue].forEach(b=>{
              result.push(a+b);
            })
        });
        return result;
    },digitMap[first]||[])


};

console.log(letterCombinations('111'));