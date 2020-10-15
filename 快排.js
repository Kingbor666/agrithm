
const quickSort = function (arr) {
    //递归终止条件  一定要写在前面
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2);
    let p = arr.splice(mid, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < p) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([p], quickSort(right))
}

quickSort([1, 3, 5, 7, 2, 4, 6])






