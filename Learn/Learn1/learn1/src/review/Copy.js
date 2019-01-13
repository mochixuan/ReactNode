function deepClone(obj) {
    let objClone = Array.isArray(obj) ? [] : {}
    if (obj && typeof obj === 'object') {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === 'object') {
                    objClone[key] = deepClone(obj[key])
                } else {
                    objClone[key] = obj[key]
                }
            }
        }
    } else {
        objClone = obj;
    }
    return objClone;
}

function qSort(arr,low,high) {
    if (low < high) {
        let pivot = partition(arr,low,high)
        qSort(arr,low,pivot-1)
        qSort(arr,pivot+1,high)
    }
}

function partition(arr,low,hight) {
    let temp = arr[low]
    while (low < hight) {
        while (low < hight && arr[hight] >= temp) --hight;
        arr[low] = arr[hight]
        while (low < hight && arr[low] <= temp) --low;
        arr[hight] = arr[low]
    }
    arr[low] = temp;
    return low;
}
