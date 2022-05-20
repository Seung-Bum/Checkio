// countDigits('hi') == 0
// countDigits('who is 1st here') == 1
// countDigits('my numbers is 2') == 1
// countDigits('This picture is an oil on canvas '
//  'painting by Danish artist Anna '
//  'Petersen between 1845 and 1910 year') == 8
// countDigits('5 plus 6 is') == 2
// countDigits('') == 0


function countDigits(text) {

    let textBox = []
    let strList = text.split(/\s+/)

    for(let i=0; i < strList.length; i++) {
        let str = strList[i]
        for(let j=0; j < str.length; j++) {

            let char = str[j]
            if( isFinite(char) == true ) {
                textBox.push(char)
            }
        }
    }

    if(textBox.length == 0) {
        console.log(textBox.length)
        return 0
    } else {
        console.log(textBox.length)
        return textBox.length
    }
}

countDigits('hi')
countDigits('who is 1st here')
countDigits('This picture is an oil on canvas '+
'painting by Danish artist Anna '+
'Petersen between 1845 and 1910 year')