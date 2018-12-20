// 1 Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
//     Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 1
var twoSum = function(nums, target) {
    var hash={}
    for(var i=0,len=nums.length;i<=len;i++){
        if(hash[nums[i]]!==undefined){
            return [hash[nums[i]],i]
        }
        hash[target-nums[i]]=i;
    }
    return []
};


// var result=[];
//
// var twoSum = function(nums, target) {
//     var nums=nums.sort(function(a,b){
//         return a-b;
//     });
//
//     var first=0;
//     var last=nums.length-1;
//
//     while(first<last){
//         var sum=nums[first]+nums[last];
//         if(sum===target){
//             return [nums[first],nums[last]];
//         } else if(sum<target){
//             first++
//         } else {
//             last--;
//         }
//     }
//     return [];
// };
// // var store=function(a,b){
// //     result.push([a,b]);
// // };