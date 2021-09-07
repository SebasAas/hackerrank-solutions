/** 
 ** Links ** 
 - hackerrank: https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/
 - test it in codesanbox: https://codesandbox.io/s/hacker-rank-sparse-arrays-2d25p
*/

function matchingStrings(strings, queries) {
    const arrRepeatNumber = [];
    for (let i = 0; i < queries.length; i++) {
        let repeated = 0;
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] === strings[j]) {
                repeated++;
            }
        }
        arrRepeatNumber.push(repeated);
    }

    return arrRepeatNumber;

    // Another solution
    // return queries.map((x) => strings.filter((y) => y === x).length));
}
