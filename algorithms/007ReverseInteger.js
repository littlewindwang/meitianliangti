// 7. Reverse Integer
// Easy
//
// Given a 32-bit signed integer, reverse digits of an integer.
//
//     Example 1:
//
// Input: 123
// Output: 321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21
// Note:
//     Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    MIN=-Math.pow(2,31);
    MAX=Math.pow(2,31)-1;

    if(z<MIN||z>MAX){
        return 0;
    }

    var y=Math.abs(x);
    var z=(x>=0)?1:-1;
    var temp=0;

    while(y>=1){
        temp=temp*10+y%10;
        y-=y%10;
        y/=10;
    }

    if(temp<MIN||temp>MAX){
        return 0;
    }

    return z*temp;

};


console.log(reverse(123));
