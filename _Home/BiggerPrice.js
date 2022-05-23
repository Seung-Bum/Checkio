// biggerPrice(2, [
//     {"name": "bread", "price": 100},
//     {"name": "wine", "price": 138},
//     {"name": "meat", "price": 15},
//     {"name": "water", "price": 1}
// ]) == [
//     {"name": "wine", "price": 138},
//     {"name": "bread", "price": 100}
// ]

// biggerPrice(1, [
//     {"name": "pen", "price": 5},
//     {"name": "whiteboard", "price": 170}
// ]) == [{"name": "whiteboard", "price": 170}]


// 타입스크립트 문법
// interface Stock {
//     name: string,
//     price: number,
// };


// sort함수 : 값의 차가 기준보다 더 적으면 더 큰 수 이다.
// ex) 3-1 = 2, 3-2 = 1  
function biggerPrice(number, data) {

    let resultList = []
    let result = data.sort(function(a,b) { // 이 부부분은 잘 기억 해두자
        return a.price - b.price;
    }).reverse();

    if (number == null || number == 0) {
        return
    } else {
        
        for(let i=0; i < number; i++) {
            resultList.push(result[i])
        }
        
    }
    console.log(resultList)
    return resultList;
}


biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
])