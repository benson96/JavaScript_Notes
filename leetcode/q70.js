/**
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps


Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

**/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var w = [0,1,2]
    for(var i = 1; i<=n; i++){
        W[i] =W[i-2] + W[i-1];
    }
};