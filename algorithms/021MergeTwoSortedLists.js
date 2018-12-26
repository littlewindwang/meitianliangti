/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 1
// var mergeTwoLists = function (l1, l2) {
//     var merged = new ListNode();
//
//     var curr = merged;
//
//
//     while (l1 || l2) {
//
//         if (!l1) {
//             curr.next = l2;
//             break;
//         }
//         if (!l2) {
//             curr.next = l1;
//             break;
//         }
//         if (l1.val < l2.val) {
//             curr.next = l1;
//             l1 = l1.next;
//         } else {
//             curr.next = l2;
//             l2 = l2.next;
//         }
//         curr=curr.next;
//
//
//     }
//
//     return merged.next;
//
//
// };

// 2

var mergeTwoLists = function (l1, l2) {

    if (!l1)
        return l2;
    if (!l2)
        return l1;

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next,l2);
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }


};