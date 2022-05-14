// Find the nearest value to the given one.

// You are given a list of values as Array form and a value for which you need to find the nearest one.

// For example, we have the following set of numbers: 4, 7, 10, 11, 12, 17, and we need to find the nearest value to the number 9. If we sort this set in the ascending order, then to the left of number 9 will be number 7 and to the right - will be number 10. But 10 is closer than 7, which means that the correct answer is 10.

// A few clarifications:

// If 2 numbers are at the same distance, you need to choose the smallest one;
// The set of numbers is always non-empty, i.e. the size is >=1;
// The given value can be in this set, which means that it’s the answer;
// The set can contain both positive and negative numbers, but they are always integers;
// The set isn’t sorted and consists of unique numbers.
// Input: Two arguments. A list of values in the Array form. The sought value is an int.

// Output: Int.


// nearestValue([4, 7, 10, 11, 12, 17], 9) == 10
// nearestValue([4, 7, 10, 11, 12, 17], 8) == 7
// nearestValue([4, 8, 10, 11, 12, 17], 9) == 8
// nearestValue([4, 9, 10, 11, 12, 17], 9) == 9
// nearestValue([4, 7, 10, 11, 12, 17], 0) == 4


// 파라미터로 제시된 숫자와 가장 근접한 값을 제시된 리스트에서 찾기

function nearestValue(numArr, num) {

    let lowest = Math.abs(numArr[0] - num)
    let lowestNum = numArr[0]

    // num이 0일 경우에는 근사값 대신 리스트에서 가장 작은값을 찾는다.
    if (num == 0) {
        lowest = Math.abs(numArr[0])
        lowestNum = numArr[0]

        for(let i=1; i < numArr.length; i++) {
            if(lowest > Math.abs(numArr[i])) {
                lowest = Math.abs(numArr[i])
                lowestNum = numArr[i]
            }
        }

        // console.log(lowestNum)
        return lowestNum
    }

    for(let i=1; i < numArr.length; i++) {

        // 근사값이 가장 작은 값을 찾는다.
        if(lowest > Math.abs(numArr[i] - num)) {
            lowest = Math.abs(numArr[i] - num)
            lowestNum = numArr[i]

        // 근사값이 같을 경우 더 작은값을 선택한다.
        } else if (lowest == Math.abs(numArr[i] - num)) { 

            if (lowestNum < numArr[i]) {
                // console.log(lowestNum)
                return lowestNum
            } else {
                // console.log(numArr[i])
                return numArr[i]
            }
        }
    }

    // console.log(lowestNum)
    return lowestNum
}

nearestValue([1,3,4,5,6,7],2)
