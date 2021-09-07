/** 
 ** Links ** 
 - hackerrank: https://www.hackerrank.com/challenges/compare-the-triplets
 - test it in codesanbox: https://codesandbox.io/s/hacker-rank-compare-triples-ex3v4
*/

function compareTriplets(a, b) {
    let alice = 0
    let bob = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) continue;
        if (a[i] > b[i]) alice += 1
        else if (b[i] > a[i]) bob += 1
    }

    return [alice, bob]
}