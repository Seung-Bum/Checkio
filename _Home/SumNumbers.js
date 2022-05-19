// sumNumbers('hi') == 0
// sumNumbers('who is 1st here') == 0
// sumNumbers('my numbers is 2') == 2
// sumNumbers('This picture is an oil on canvas '
//  'painting by Danish artist Anna '
//  'Petersen between 1845 and 1910 year') == 3755
// sumNumbers('5 plus 6 is') == 11
// sumNumbers('') == 0

// 문자열 중 숫자를 골라내서 더하기

function sumNumbers(text) {
    let t = text.split(' ')
    let num = 0;
    let result = 0;
    
    if (t != '') {
        for (let i=0; i<t.length; i++) {
            if (isNaN(t[i]) == false) { // 숫자
                num += t[i]
            } else {
                num += 0
            }
        }
    } else {
        num = 0
    }

    let numString = num.toString()
    if (parseInt(numString) != 0) {
        for (let j=0; j<numString.length; j++) {
            // console.log(num[j])
            result += parseInt(num[j])
        }
    }
    
    console.log(result)
    return result
}

// sumNumbers('who is 1st here')
// sumNumbers('my numbers is 2')
sumNumbers('This picture is an oil on canvas '
+ 'painting by Danish artist Anna '
+ 'Petersen between 1845 and 1910 year')
// sumNumbers('5 plus 6 is')
// sumNumbers('')
// sumNumbers("It is the natural number following 4 and preceding 6  and is a prime number")
sumNumbers("hi")