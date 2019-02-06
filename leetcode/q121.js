/*
 Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.
*/

/*
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
 
var maxProfit = function(prices) {
    if (!prices) 
        return 0;
    var min = prices[0];
    var max = 0;
    for (var i = 1; i < prices.length; i++) {
        var tmp = prices[i];
        if (tmp < min) 
            min = tmp;
        else if (tmp - min > max) 
            max = tmp - min;
    }
    return max;
            
};