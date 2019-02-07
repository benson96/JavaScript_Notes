/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition. 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
**/
/**
 * @param {number[]} A
 * @return {number[]}
 */
 
var sortArrayByParity = function(A) {
    for(var i = 0, j = A.length-1; i < j; ){
        if(A[i] % 2 == 0){
            A[i] = A[i];
            i++;
        }
        else{
            var temp = A[j];
            A[j] = A[i];
            A[i] = temp;
            j--;
        }
    }
    
    return A;
};