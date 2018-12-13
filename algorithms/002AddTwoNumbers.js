// 2. Add Two Numbers
//
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
//     You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
//     Example:
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    var answer = new ListNode();
    var current = answer;
    var carry = 0

    while (l1 || l2) {
        var value = 0;
        if (l1) {
            value += l1.val
            l1 = l1.next
        }
        if (l2) {
            value += l2.val
            l2 = l2.next
        }
        value += carry;
        if (value >= 10) {
            value = value - 10;
            carry = 1;
        } else {
            carry = 0
        }
        current.val = value;
        if (carry === 1 || l1 || l2) {
            current.next = new ListNode(1);
        }
        current = current.next
    }
    return answer
};
