// sumNumbers('hi') == 0
// sumNumbers('who is 1st here') == 0
// sumNumbers('my numbers is 2') == 2
// sumNumbers('This picture is an oil on canvas '
//  'painting by Danish artist Anna '
//  'Petersen between 1845 and 1910 year') == 3755
// sumNumbers('5 plus 6 is') == 11
// sumNumbers('') == 0


function sumNumbers(text) {
    let t = text.split(' ')
    let num;
    for (let i=0; i<t.length; i++) {
        if (isNaN(t[i]) == false) { // 숫자
            num += t[i]
        }
    }
    console.log(num)
}

sumNumbers('who is 1st here')
sumNumbers('my numbers is 2')