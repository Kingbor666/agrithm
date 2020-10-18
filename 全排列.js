var permute = function (nums) {
    let res = []
    function dfs(path) {
        if (path.length === nums.length) {
            res.push(path.slice())
        }
        for (let i of nums) {
            if (path.includes(i)) {
                continue
            }
            path.push(i);
            dfs(path);
            path.pop();
        }
    }
    dfs([])
    return res
};