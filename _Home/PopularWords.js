
console.log(
    popularWords('When I was One \n\
    I had just begun\n\
    When I was Two\n\
    I was nearly new', ['i', 'was', 'three', 'near']) == {
        'i': 4,
        'was': 3,
        'three': 0,
        'near': 0
    }
)

function popularWords(text, words) {
    text_list = text.toLowerCase().split(/[\n\s]/)

    let result = new Object()
    words.forEach(function(word){
        result[word] = text_list.reduce((cnt, w) => cnt + (word === w), 0)
    })
    
    return result
}