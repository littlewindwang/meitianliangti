/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
<<<<<<< HEAD
var hash={} ;






};
=======
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
>>>>>>> 30f78206cd5eff46e2e82bfde35ad4c8c27a106d
