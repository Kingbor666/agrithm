//获取URL参数
//http://www.baidu.com?a=hhh&b=uuu&c=sfd
function getPara(url, key) {
    let strArr = url.split("?")[1].split("&");
    let count = 0;
    let res = [];
    let resObj = {};
    strArr.map((v) => {
        console.log(v.split("=")[0])
        if (v.split("=")[0] === key) {
            count++
            res.push(v.split("=")[1])
        }
        if (typeof key === "undefined") {
            if (!resObj[v.split("=")[0]]) {
                resObj[v.split("=")[0]] = v.split("=")[1]
            } else {
                //有没有更简洁的？
                resObj[v.split("=")[0]] = [resObj[v.split("=")[0]]].concat(v.split("=")[1])
            }

        }
    })
    if (typeof key === "undefined") {
        return resObj
    }
    if (count > 1) {
        return res;
    } else if (count === 1) {
        return res[0]
    }
    return ""
}

getPara("http://www.baidu.com?a=hhh&a=ooo&b=uuu&c=sfd")