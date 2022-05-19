// firstWord("Hello world") == "Hello"
// firstWord("greetings, friends") == "greetings"

function firstWord(text) {
    const regExp = /[a-zA-Z]/g; // 영어 if(regExp.test(str))

    let strArr = text.split(/\s+/) // 자바스크립트 정규식, 공백기준으로 분리해준다.

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