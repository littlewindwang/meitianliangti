/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var ahead,behind;
    var behind=ahead=head;

    for(var i=0;i<n;i++){
        ahead=ahead.next;
    }

    if(!ahead.next){
        head.next=null;
        return head;
    }



    while(ahead.next){
        ahead=ahead.next;
        behind=behind.next;
    }

    behind.next=behind.next.next;




return head;

};