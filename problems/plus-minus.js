/** 
 ** Links ** 
 - hackerrank: https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus
 - test it in codesanbox: https://codesandbox.io/s/hacker-rank-plusminus-ct503
*/


function plusMinus(arr) {
    let sign = {
        positive: 0,
        negative: 0,
        zero: 0
    };

    // Store the numbers with the same sign
    arr.map(num => {
        if (num > 0) sign.positive++;
        else if (num < 0) sign.negative++;
        else sign.zero++;
    });

    Object.values(sign).map(num => {
        console.log((num / arr.length).toFixed(6))
    })
}