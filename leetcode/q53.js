/*

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 
var maxSubArray = function(nums) {
    var max = nums[0]
    var sum = nums[0]
    
    for(var i = 1; i < nums.length; i++){
        if(sum>0){
            sum = sum+nums[i];
            max = Math.max(sum,max);
        }else{
            sum = nums[i];
            max = Math.max(sum,max);
        }
    }
    return max;
};