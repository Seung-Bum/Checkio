// splitPairs('abcd') == ['ab', 'cd']
// splitPairs('abc') == ['ab', 'c_']
// splitPairs('abcdf') == ['ab', 'cd', 'f_']
// splitPairs('a') == ['a_']
// splitPairs('') == []




function splitPairs(text) {

    let textList = []
    let length = 0

    if (text == '') {
        return []
    }
    
    for(let i=0; i < text.length; i++) {

        if (i % 2 == 0) {
            length += 2
            let strValue = text.slice(length-2, length)
            if (strValue.length != 2) {
                textList.push(strValue + "_")
            } else {
                textList.push(strValue)
            }
            
        }
        
    }
    
    // console.log(textList)

    return textList
}

splitPairs('abcde')
splitPairs('abc')
splitPairs('')
splitPairs('a')
splitPairs('abcd')