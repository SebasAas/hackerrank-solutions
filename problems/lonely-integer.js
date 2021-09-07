/** 
 ** Links ** 
 - hackerrank: https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer
 - test it in codesanbox: https://codesandbox.io/s/hacker-rank-lonely-integer-bqsl4
*/

function lonelyinteger(a) {
    let lonelyNumb = [];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (i != j && a[i] === a[j]) break
            else if (j == a.length - 1) {
                lonelyNumb.push(a[i])
            }
        }
    }
}
