
console.log(
    popularWords('When I was One \n\
    I had just begun\n\
    When I was Two\n\
    I was nearly new', ['i', 'was', 'three', 'near'])
)

function popularWords(text, words) {
    text_list = text.toLowerCase().split(/[\n\s]/)

    let result = new Object()
    words.forEach(function(word){
        result[word] = text_list.reduce((cnt, w) => cnt + (word === w), 0)
        
        // w로 값이 변환되며 대입된다.
        // 0 => 초기값을 입력하지 않으면, 배열의 첫번째 값이 초기 값이 된다.
        // word === w => true일 경우 1이 되어 카운트 된다.
    })
    
    return result
}

// https://bigtop.tistory.com/69 참고