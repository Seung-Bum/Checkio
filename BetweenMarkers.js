// betweenMarkers('What is >apple<', '>', '<') == 'apple'
// betweenMarkers('What is [apple]', '[', ']') == 'apple'
// betweenMarkers('What is ><', '>', '<') == ''
// betweenMarkers('[an apple]', '[', ']') == 'an apple'


function betweenMarkers(str, leftStr, rightStr) {
    
    let Lstr = str.indexOf(leftStr)
    let Rstr = str.indexOf(rightStr)
    let result = str.slice(Lstr+1, Rstr)

    // console.log(result)
    return result

}


betweenMarkers('What is >apple<', '>', '<')
betweenMarkers('What is [apple]', '[', ']')
betweenMarkers('[an apple]', '[', ']')
betweenMarkers('What is ><', '>', '<')