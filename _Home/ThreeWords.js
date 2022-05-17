// threeWords("Hello World hello") == True
// threeWords("He is 123 man") == False
// threeWords("1 2 3 4") == False
// threeWords("bla bla bla bla") == True
// threeWords("Hi") == False


function threeWords(text) {
    let arr = text.split(/\s/).map(Number);
    let count = 0;
    console.log(arr)
    for (let i=0; i<arr.length; i++) {
        if( isNaN(arr[i]) != true ) { 
            // NaN(Not-a-Number) 값에 대해 True로 출력하고 유효한 숫자 값에 대해 False를 반환합니다.
            count = 0
        } else {
            count++
        }
        
        if(count == 3) { return true }
    } 

    if (2 < count) {
        return true; // 숫자가 없다면 true
    } else {
        return false
    }  
}

console.log( threeWords("Hello World hello") ) // true
console.log( threeWords("He is 123 man") ) // false
console.log( threeWords("Hi") ) // false
console.log( threeWords("1 2 3 4") ) // false
console.log( threeWords("bla bla bla bla") ) // true
console.log( threeWords( "one two 3 four five six 7 eight 9 ten eleven 12" ) ) // true