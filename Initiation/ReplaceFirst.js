// replaceFirst([1, 2, 3, 4]) == [2, 3, 4, 1]
// replaceFirst([1]) == [1]
// replaceFirst([]) == []

// 첫번째 숫자를 마지막으로 보내기

function replaceFirst(values) {

    let temp

    if (values.length == 1 || values.length == 0) {
        console.log(values)
        return values
        
    } else {
        temp = values[0]
        values = values.slice(1, values.length)
        values.push(temp) 
        console.log(values)
        return values
    }
    
}

replaceFirst([1, 2, 3, 4])
replaceFirst([1])
replaceFirst([])