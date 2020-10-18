module.exports = function reverse(n) {
    let num = '';
    let arr = String(n).split('');

    if (arr[0] === '-' && arr[arr.length - 1] === '0') {
        for (let i = arr.length - 2; i > 0; i--) {
            num += arr[i];
        }
    } else if (arr[0] === '-') {
        for (let i = arr.length - 1; i > 0; i--) {
            num += arr[i];
        }
    } else if (arr[arr.length - 1] === '0') {
        for (let i = arr.length - 2; i >= 0; i--) {
            num += arr[i];
        }
    } else {
        for (let i = arr.length - 1; i >= 0; i--) {
            num += arr[i];
        }
    }
    reversed = +num;
    return reversed;
}

