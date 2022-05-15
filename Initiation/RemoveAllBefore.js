// removeAllBefore([1, 2, 3, 4, 5], 3) == [3, 4, 5]
// removeAllBefore([1, 1, 2, 2, 3, 3], 2) == [2, 2, 3, 3]
// removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2) == [2, 4, 2, 3, 4]
// removeAllBefore([1, 1, 5, 6, 7], 2) == [1, 1, 5, 6, 7]
// removeAllBefore([], 0) == []

function removeAllBefore(values, number) {
    let num = values.indexOf(number)
    if (num == -1) {
        return values
    }
    // console.log(values.slice(num, values.length))
    return values.slice(num, values.length)
}

removeAllBefore([1, 2, 3, 4, 5], 3)
removeAllBefore([1, 1, 2, 2, 3, 3], 2)
removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2)
removeAllBefore([1, 1, 5, 6, 7], 2)
removeAllBefore([], 0)
removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7)
