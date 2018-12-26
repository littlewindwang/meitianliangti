/**
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function (s) {
//     var SymbleValue = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     }
//
//     var current,next,result=0;
//
//     for(var i=0,l=s.length;i<l;i++){
//         console.log(result);
//          current=s[i];
//          next=s[i+1]?s[i+1]:'';
//          if(current=='I'&&(next=='V'||next=='X')){
//              result=result-SymbleValue[current]+SymbleValue[next];
//              i++;
//          } else if(current=='X'&&(next=='L'||next=='C')){
//              result=result-SymbleValue[current]+SymbleValue[next];
//              i++;
//         } else if(current=='C'&&(next=='D'||next=='M')){
//              result=result-SymbleValue[current]+SymbleValue[next];
//              i++;
//         } else {
//              result += SymbleValue[current];
//          }
//
//     }
//     return result;
// };



var romanToInt = function (s) {
    var SymbleValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    var current,last=0,result=0;

var i=s.length-1;


while(i>=0){
    current=SymbleValue[s[i]];
    if(current<last){
        result-=current;
    } else{
        result+=current;
        last=current;
    }
    i--;

}


    return result;
};







console.log(romanToInt("IV"));