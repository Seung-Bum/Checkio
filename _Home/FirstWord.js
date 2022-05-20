// firstWord("Hello world") == "Hello"
// firstWord("greetings, friends") == "greetings"

// 문자열에 첫단어를 확인해서 리턴하기

function firstWord(text) {
    const regExp = /[a-zA-Z]/g; // 영어 if(regExp.test(str))

    let strArr = text.split(/\s+/) // 자바스크립트 정규식, 공백기준으로 분리해준다.
    if( strArr.length == 1 ) {
        if( strArr[0].indexOf('.') != -1 ) {
            return strArr[0].split('.')[0]
        } else {
            return strArr[0]
        }
    }

    for(let i=0; i < strArr.length; i++) {
        if( regExp.test(strArr[i]) ) {

            let result = strArr[i]
            if( result.indexOf(',') != -1 ) {
                result = result.replace(result[result.indexOf(',')], "")
            }

            console.log(result)
            return result
        }
    }
}


firstWord("Hello world")
firstWord("greetings, friends")
firstWord(" a word ")
firstWord("Hello.World")