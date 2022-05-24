// betweenMarkers('What is >apple<', '>', '<') == 'apple'
// betweenMarkers('No[/b] hi', '[b]', '[/b]') == 'No'

function betweenMarkers(text, begin, end) {

    let b = text.indexOf(begin)
    let e = text.indexOf(end)

    if ( e == -1 ) { e = text.length } // end가 없다면 begin 부터 끝까지

    if( text.slice(b+1, e).indexOf( begin.substr(-1) ) != -1 ) { 
        // end가 없다면 begin 부터 끝까지 문자열에 begin의 마지막 문자가 있다면 ..

        let newText = text.slice(b+1, e)
        console.log( newText.slice( newText.indexOf( begin.substr(-1) ) + 1) )
        return newText.slice( newText.indexOf( begin.substr(-1) ) + 1)
        // begin의 마지막 문자부터 끝까지 출력

    } else {
        console.log( text.slice(b+1, e) ) // begin이 한문자 일때 사용된다.
        return text.slice(b+1, e)
    }
}

betweenMarkers('What is >apple<', '>', '<') // apple
betweenMarkers('No[/b] hi', '[b]', '[/b]') // No
betweenMarkers("<head><title>My new site</title></head>",
                            "<title>", "</title>") // My new site
betweenMarkers('No [b]hi', '[b]', '[/b]') // hi
betweenMarkers('No hi', '[b]', '[/b]') // No hi
betweenMarkers('No <hi>', '>', '<') // " "
betweenMarkers("Never send a human to do a machine's job.","Never","do") // send a human to