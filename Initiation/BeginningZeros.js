// beginningZeros('100') == 0
// beginningZeros('001') == 2
// beginningZeros('100100') == 0
// beginningZeros('001001') == 2
// beginningZeros('012345679') == 1
// beginningZeros('0000') == 4

// text의 첫글자의 0이 몇개인지

function beginningZeros(text) {
    
    let count = 0

    for(let i=0; i < text.length; i++) {

        if (text[i] != '0') {

            return text.slice(0,i).length

        } else {
            count++
            if (count == text.length) {
                return count
            }
        }
    }
}

beginningZeros('0000')