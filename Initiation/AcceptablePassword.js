/*You are the beginning of a password series. Every mission will be based on the previous one. Going forward the missions will become slightly more complex.

In this mission you need to create a password verification function.

Those are the verification conditions:

the length should be bigger than 6.
Input: A string.

Output: A bool.

Example:*/

// 어떻게든 보기의 예제 암호조건을 만족시키면됨

function isAcceptablePassword(password) {
    return password.length > 6;
}

console.log('Example:');
console.log(isAcceptablePassword('short')); // false
console.log(isAcceptablePassword('muchlonger')); // true