// 예제처럼 String을 뒤집어서 리턴하기
// backwardString('val') == 'lav'
// backwardString('') == ''
// backwardString('ohho') == 'ohho'
// backwardString('123456789') == '987654321'



function backwardString(string) {
    let result="" // 최종값을 저장할 문자열
    for (let i=string.length; 0 <= i; i--) { // 문자열의 마지막 부터 출력
        if (i == 0) {
            break
        }
        //console.log(string[i-1])
        result += string[i-1]
    }
    console.log(result)
    return result
}

backwardString('ohho')
backwardString('val')
backwardString('123456789')
backwardString('')