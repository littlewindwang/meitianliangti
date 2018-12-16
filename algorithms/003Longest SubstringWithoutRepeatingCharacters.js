// 3. Longest Substring Without Repeating Characters
//
// Given a string, find the length of the longest substring without repeating characters.
//
//     Example 1:
//
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


//when copy this code to leetcode please delete all the console.log
var lengthOfLongestSubstring = function(s) {
    var l=s.length;


console.log(s.length);

    var end=-1;
    var max=0;
    var hash={};




    for(var i=0;i<76;i++) {
        console.log(s.charAt(i));

    }


        for(var i=0;i<l;i++){
console.log(123);
console.log(s.charAt(i));
        console.log('end '+end);
        console.log('i '+i);


        console.log(hash[s.charAt(i)]);


        if(hash[s.charAt(i)]>end){


            end=hash[s.charAt(i)]

            // continue;
        }


        if(i-end>max){
            max=i-end;
        }

        hash[s.charAt(i)]=i;

        console.log('max '+max);

        console.log('*********')

    }
    return max;
};

var ans=lengthOfLongestSubstring("hvmpigcqqdzttakknrxdxxytyjhozstiqfxynzqfepyzskjhbjmygkuftdvuwqcovcmkbdpguphm");
console.log(ans);
