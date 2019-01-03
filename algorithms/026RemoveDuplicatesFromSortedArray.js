/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length<=1)
        return nums.length;

    var j=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]!=nums[j]){
            j++;
            nums[j]=nums[i];
        }
    }
    return j+1;
};