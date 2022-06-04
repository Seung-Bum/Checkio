nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
nonUniqueElements([2]) == []
nonUniqueElements([10,20,30,10])


function nonUniqueElements(data) {
    
    // 중복값이 없는 경우
    const set = new Set(data); // Set은 중복을 허용하지 않음
    if(data.length == set.size) {
        // arr.length 실제길이 == set.size 중복을 없앤값
        // 두개의 값이 같다면 중복값이 없다는것
        if(data.length == 1) { return [] }
        return []
    }

    // 값을 하나씩 넘기고 그 값과 같은 값이 있으면 
    // 값을 overlap에 담고 overlap의 길이가 1인 값을 지워라

    let numList = []
    for(let i=0; i < data.length; i++) {
        let overlap = []
        for(let j=0; j < data.length; j++) {
            if(data[i] == data[j]) {
                overlap.push(data[j])
            }
        }
        if( overlap.length == 1 ) { numList.push(data[i]) }
    }

    for(let i=0; i < numList.length; i++) {
        let index = data.indexOf(numList[i])
        data.splice(index,1)
    }

    console.log(data)
    return data
}

