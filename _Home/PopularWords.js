popularWords('When I was One \n\
I had just begun\n\
When I was Two\n\
I was nearly new', ['i', 'was', 'three', 'near']) == {
    'i': 4,
    'was': 3,
    'three': 0,
    'near': 0
}

function popularWords(text, words) {

    text_list = text.toLowerCase().split(/[\n\s]/)

    return words.forEach(w => { text_list.reduce((cnt, w) => cnt + ('a' === w), 0) })
    

    
    
    //{w: text_list.count(w) for w in words}
    //console.log(text_list)

    /*
    let count = 0
    for(let j=0; j < words.length; j++) {
        for(let i=0; i < text.length; i++) {
            // console.log(words[j])
            if(words[j] == text[i]) {
                console.log(words[j]) // 대소문자
            } else {
                console.log("oo")
            }
        }
    }
    */
    

    return {};
}