// correctSentence("greetings, friends") == "Greetings, friends."
// correctSentence("Greetings, friends") == "Greetings, friends."
// correctSentence("Greetings, friends.") == "Greetings, friends."

// 문장의 첫 글자가 대문자가 아니면 대문자로, 
// 문장의 마지막에 .이 없으면 .을 찍어라

function correctSentence(text) {

    let result = text

    if (result[0] != result[0].toUpperCase()) {
        result = result.replace(result[0], result[0].toUpperCase())
    }

    if (result[result.length-1] != ".") {
        result = result + "."
    }

    // console.log(result)
    return result
}

correctSentence("greetings, friends")
correctSentence("Greetings, friends")
correctSentence("Greetings, friends.")
