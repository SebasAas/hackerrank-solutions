/** 
 ** Links ** 
 - hackerrank: https://www.hackerrank.com/challenges/a-very-big-sum
 - test it in codesanbox: https://codesandbox.io/s/hacker-rank-a-very-big-sum-9zdhi
*/

function aVeryBigSum(ar) {
    return ar.reduce((prev, current) => prev + current);
}