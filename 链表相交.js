var getIntersectionNode = function (headA, headB) {
    let p1 = headA;
    let p2 = headB;
    while (true) {
        if (p1 === p2) {
            return p1
        }
        if (p1) {
            p1 = p1.next
        } else {
            p1 = headB
        }
        if (p2) {
            p2 = p2.next
        } else {
            p2 = headA
        }

    }
};