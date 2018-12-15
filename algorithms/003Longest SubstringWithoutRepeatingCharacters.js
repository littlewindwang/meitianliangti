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


var lengthOfLongestSubstring = function(s) {
    var l=s.length;
    if(l===1){
        return 1;
    }
    var end=0;
    var start=1;
    var max=0;
    var hash={};


    for(;start<l;start++){

        console.log('end '+end+'  '+s.charAt(end))
        console.log('start '+start+'  '+s.charAt(start));


        if(s.charAt(end)===s.charAt(start)){
            if(start-end>max){
                max=start-end;
                console.log('???')
            }
            end=start;
            hash={}
        }

        if(s.charAt(end)!==s.charAt(start)){
            if(hash[s.charAt(start)]>0)
            {
                end=hash[s.charAt(start)];
                hash={}
            }
            if(start-end>=max){
                max=start-end+1;
                console.log('!!!');
            }
            hash[s.charAt(start)]=start;
        }

        console.log('max '+max);
    }
    // console.log(end);
    return max;
};

var ans=lengthOfLongestSubstring("dvdf");
console.log(ans);
