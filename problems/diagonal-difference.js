/** 
 ** Links ** 
 - hackerrank: https://www.hackerrank.com/challenges/one-month-preparation-kit-diagonal-difference
 - test it in codesanbox: https://codesandbox.io/s/hacker-rank-diagonal-differences-9cc24
*/

function diagonalDifference(arr) {
    const toLeftDiag = [];
    const toRightDiag = [];

    for (let i = 0; i < arr.length; i++) {
        toLeftDiag.push(arr[i][i]);
        toRightDiag.push(arr[i][arr.length - 1 - i]);
    }

    const leftDiag = toLeftDiag.reduce((prev, next) => prev + next);
    const rightDiag = toRightDiag.reduce((prev, next) => prev + next);

    const result = Math.abs(leftDiag - rightDiag);

    return result;
}