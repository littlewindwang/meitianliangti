// 9. Palindrome Number
// Easy
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
//
//     Example 1:
//
// Input: 121
// Output: true
// Example 2:
//
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
//     Example 3:
//
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
//     Follow up:
//
//     Coud you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {


    if(x<0||(parseInt(x%10)===0&&x!==0)){
        return false
    } else {
        var ans=false;


var reverse=0;
        while(x>reverse){

            reverse=reverse*10+x%10;

            if(x==reverse){//为什么这里和solution不一样,为什么要多加一个判断,少了这个就什么也判断不出来了?
                return true
            }
            // x = Math.floor(x / 10);
            x-=x%10;
            x/=10;
        }

        return x===reverse;
    }

};

ans=isPalindrome(11911)
console.log(ans);



