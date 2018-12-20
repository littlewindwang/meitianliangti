/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    var result=[];
    nums=nums.sort(function(a,b){return a-b;});

    for(var i=0,li=nums.length;i<li;i++){
        var valuei=nums[i];

        for(var j=i+1,lj=nums.length;j<lj;j++){
            var valuej=nums[j];

            for(var k=j+1,lk=nums.length;k<lk;k++){
                var valuek=nums[k];
                if (valuei+valuej+valuek===0){
                    store(valuei,valuej,valuek);
                }
            }

        }

    }
    console.log(result);
    return result;

    function store(a,b,c){
        if(result.indexOf([a,b,c])<0)
        {

            result.push([a,b,c]);
        }
    }
};

threeSum([-1, 0, 1, 2, -1, -4]);