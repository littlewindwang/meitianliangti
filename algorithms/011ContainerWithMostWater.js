/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//
//     var maxarea=0;
//
//     for(i=0,l=height.length;i<l;i++){
//         for(j=i+1;j<l;j++){
//             maxarea=Math.max(maxarea,Math.min(height[i],height[j])*(j-i));
//
//         }
//     }
//     return maxarea;
//
//
//
// };


var maxArea = function(height) {

    var maxarea=0;

    var left=height[0];
    var right=height[height.length-1];


    var i=0;
    var j=height.length-1;

    while(i!==j){

            maxarea=Math.max(maxarea,Math.min(height[i],height[j])*(j-i));

            if(height[i]>height[j]){
                j--
            } else {
                i++
            }



    }
    return maxarea;
};