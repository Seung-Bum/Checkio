// Your mission here is to create a function that gets an array and returns a tuple with 3 elements 
//- the first, third and second element from the last for the given array.
// 배열의 첫번째 요소, 세번째 요소, 끝에서 두번째 요소만 꺼내는 function 만들기

// Input: A tuple, at least 3 elements long.

// Output: A tuple.

// Example:

easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]) == [1, 3, 7]
easyUnpack([1, 1, 1, 1]) == [1, 1, 1]
easyUnpack([6, 3, 7]) == [6, 7, 3]


function easyUnpack(elements) {
    return [elements[0], elements[2], elements[elements.length - 2]];
}

console.log('Example:');
console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]));


