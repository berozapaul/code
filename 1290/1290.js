/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    
    let result = 0;
    const getVal = (head) => {
        if (!head) {
            return 0;
        }
        
        result = result * 2 + head.val
        getVal(head.next);
        return result;
    }
    
    return getVal(head);
};
