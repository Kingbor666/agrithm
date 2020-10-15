//迭代法

var reverseList = function (head) {
    let p = head;
    let c = null;
    let res = null;
    while (p) {
        c = p.next;
        p.next = res;
        res = p;
        p = c
    }
    return res
};

//递归
var reverseList = function(head) {
    //递归终止条件
    if (!head || !head.next) return head;
    let next = head.next; // next节点，反转后是最后一个节点
    let reverseHead = reverseList(next);
    head.next = null; // 裁减 head
    next.next = head; // 尾接
    return reverseHead;//
};

