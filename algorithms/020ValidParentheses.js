/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stash=[];
    var getHead=function(){
        return stash[stash.length-1];
    };
    var table1={
        '(': ')',
        '{': '}',
        '[': ']',
    };
     var table2={
         ')': '(',
         '}': '{',
         ']': '[',
     };


     for(var i=0,l=s.length;i<l;i++){
         if(table1[s[i]]){
             stash.push(s[i]);
             continue;
         }
         if(table2[s[i]]){
             if(table2[s[i]]===getHead()){
                 stash.pop();
             } else {
                 return false;
             }
         }

     }
     return stash.length===0;

};
console.log(isValid('({[]ss})'));

