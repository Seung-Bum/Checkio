// replaceFirst([1, 2, 3, 4]) == [2, 3, 4, 1]
// replaceFirst([1]) == [1]
// replaceFirst([]) == []

// 첫번째 숫자와 마지막 숫자의 위치를 바꾸기

function replaceFirst(values) {

    let temp

    if (values.length == 1 || values.length == 0) {
        // console.log(values)
        return values
        
    } else {
        temp = values[values.length-1]
        values[values.length-1] = values[0]
        values[0] = temp
        // console.log(values)
        return values
    }
    
}

replaceFirst([1, 2, 3, 4])
replaceFirst([1])
replaceFirst([])