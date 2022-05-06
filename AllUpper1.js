// Check if a given string has all symbols in upper case. 
// If the string is empty or doesn't have any letter in it - function should return True.

// Input: A string.

// Output: a boolean.

// Example:

// isAllUpper('ALL UPPER') == true
// isAllUpper('all lower') == false
// isAllUpper('mixed UPPER and lower') == false
// isAllUpper('') == true

// 문자열이 모두다 대문자인지 확인하는 함수를 만들어라
// .toUpperCase()를 이용해서 필터링을 했다.

function isAllUpper(string) {
    if (string == string.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}



