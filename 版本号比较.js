var compareVersion = function (version1, version2) {
    let arr1 = version1.split(".");
    let arr2 = version2.split(".");
    let comCount = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < comCount; i++) {
        console.log(parseInt(arr1[i]), parseInt(arr2[i]), 999, comCount)
        if (isNaN(arr1[i])) {
            arr1[i] = 0
        }
        if (isNaN(arr2[i])) {
            arr2[i] = 0
        }
        if (parseInt(arr1[i]) > parseInt(arr2[i])) {
            return 1
        } else if (parseInt(arr1[i]) < parseInt(arr2[i])) {
            return -1
        }
    }
    return 0
};