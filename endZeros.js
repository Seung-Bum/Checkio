// 주어진 숫자 끝에 몇개의 0이 있는지 맞춰보시오

function endZeros(num) {
    let count = 0;
    str_num = String(num);
    for (let i = str_num.length-1; i >= 0; i--) {
        if (str_num[i] != '0') {
            break
        } else {
            count++
        }
    }
    return count
}

console.log('Example:');
console.log(endZeros(0)); // 1
console.log(endZeros(10)); // 1
console.log(endZeros(101)); // 0
console.log(endZeros(245)); // 0
console.log(endZeros(100100)); // 2
console.log(endZeros(1001000)); // 3