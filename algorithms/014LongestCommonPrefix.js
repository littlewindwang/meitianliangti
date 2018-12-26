/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var longest='';
    var l=strs.length;
    longest=strs[0];
    for(var i=1;i<l;i++){
        // current=
        for(var j=0,lon=longest.length;j<lon;j++){
            if(longest[j]!==strs[i][j]){
                longest=longest.slice(0,j);
                break;
            }
        }
    }
    return longest;



};
