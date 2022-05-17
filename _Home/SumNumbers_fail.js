function sumNumbers(test) {
    return test
      .split(/\s+/) // 자바스크립트 정규식, 공백기준으로 분리해준다.
      .map(Number) // type을 숫자로 변경한다.
      .filter(isFinite) // 유한한 수인지, 무한한 수인지 확인함, 문자의 경우 false
      .reduce((accum, n) => accum + n, 0); // 축약, 중첩함수, accum은 누적이라는 뜻, 0은 초기값
  }

console.log( sumNumbers('my numbers is 2') );

let text = "호호 호호 하하 히히 33"
console.log(text.split(/\s+/).map(Number).filter(isFinite).reduce((accum, n) => accum + n, 0))
// [ '호호', '호호', '하하', '히히' ]
// [ NaN, NaN, NaN, NaN, 33 ]
// [ 33 ]
// 33