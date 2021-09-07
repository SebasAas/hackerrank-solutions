/** 
 ** Links ** 
 - hackerrank: https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/
 - test it in codesanbox: https://codesandbox.io/s/hacker-rank-time-conversion-y66td
*/

function timeConversion(s) {
    const time = s.substring(0, s.length - 2).split(":");
    const convention = s.substring(s.length - 2, s.length);
    const hr = parseInt(time[0]);

    if (convention === "PM") {
        hr === 12 ? (time[0] = "12") : (time[0] = hr + 12);
        return time.join(":");
    }

    if (convention === "AM") {
        hr === 12 ? (time[0] = "00") : time[0];
        return time.join(":");
    }
}