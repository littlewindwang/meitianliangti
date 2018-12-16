// 5. Longest Palindromic Substring
// Medium
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example 1:
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
//     Example 2:
//
// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */



var longestPalindrome = function (s) {

    var l = s.length;


    var oddlen = -1;
    var evenlen = -1;
    var oddindex = -1;
    var evenindex = -1;
    var oddstr='';
    var evenstr='';

    for (var i = 0; i < l; i++) {
        var oddtemp = 0;
        var eventemp = 0;

        while (s[i - oddtemp] !== undefined && s[i + oddtemp] !== undefined && s[i - oddtemp] === s[i + oddtemp]) {
            oddtemp++;
        }
        if (oddtemp - 1 > oddlen) {
            oddlen = oddtemp - 1;
            oddindex = i
             oddstr=s.slice(i - oddlen,i+oddlen+1);
        }

        while (s[i - eventemp] !== undefined && s[i+1 + eventemp] !== undefined && s[i - eventemp] === s[i+1 + eventemp]) {

            // console.log(eventemp);
            // console.log(s[i - eventemp]);
            // console.log(s[i - eventemp+1]);
// console.log('******')
            eventemp++;
        }
        if (eventemp - 1 > evenlen) {
            evenlen = eventemp - 1;
            evenindex = i;
             evenstr=s.slice(i - evenlen,i+evenlen+1+1);
            // console.log(evenstr);
        }




    }

    // console.log('oddlen '+oddlen);
    // console.log('oddindex '+oddindex);
    // console.log('oddstr '+oddstr);



    // console.log('evevlen '+evenlen);
    // console.log('evevindex '+evenindex);
    // console.log('evenstr '+evenstr);



   return oddstr.length>evenstr.length?oddstr:evenstr

};

console.log(longestPalindrome('babad'))