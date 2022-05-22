// backwardStringByWord('') == ''
// backwardStringByWord('world') == 'dlrow'
// backwardStringByWord('hello world') == 'olleh dlrow'
// backwardStringByWord('hello   world') == 'olleh   dlrow'

function backwardStringByWord(text) {

    var slice = Array.prototype.slice;
    var textArr = slice.call(text, 0, text.length)
    var textArr = textArr.reverse()

    if( textArr.length == 0 ) {
        return ''
    } else {

        const sumWithInitial = textArr.reduce(
            (previousValue, currentValue) => previousValue + currentValue
        )

        const result = sumWithInitial.split(/\s/).reverse().reduce(
            (previousValue, currentValue) => previousValue + " " + currentValue
        )

        console.log( result )
        return result
    }
}

// backwardStringByWord('world') // dlrow
backwardStringByWord('') // ''
backwardStringByWord('hello world') // dlrow olleh
backwardStringByWord('hello   world') // dlrow   olleh