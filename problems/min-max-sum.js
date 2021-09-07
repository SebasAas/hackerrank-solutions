/** 
 ** Links ** 
 - hackerrank: https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum
 - test it in codesanbox: https://codesandbox.io/s/hacker-rank-min-max-sum-crbvl
*/

function miniMaxSum(arr) {
    const arrSorted = arr.sort((a, b) => a - b);
    let minSum = arrSorted.slice(0, -1);
    let maxSum = arrSorted.slice(1);
    minSum = minSum.reduce((prev, current) => prev + current, 0);
    maxSum = maxSum.reduce((prev, current) => prev + current, 0);
}