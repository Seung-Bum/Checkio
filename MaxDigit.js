// maxDigit(0) == 0
// maxDigit(52) == 5
// maxDigit(634) == 6
// maxDigit(1) == 1
// maxDigit(10000) == 1


function maxDigit(value) {
    var stringValue = (value).toString()
    var standardValue = parseInt(stringValue[0])
    var maxValue = 0

    for (let i=0; i < stringValue.length; i++) {
        
        let nextValue = parseInt(stringValue[i])
        
        if (standardValue < nextValue) {
            standardValue = nextValue
            maxValue = standardValue
        } else if (i == 0) {
            maxValue = standardValue
        }
    }
    // console.log(maxValue)
    return maxValue
}


maxDigit(52)
maxDigit(634)
maxDigit(1)
maxDigit(10000)
maxDigit(0)