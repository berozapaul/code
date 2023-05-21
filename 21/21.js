/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param list1
 * @param list2
 * @return mergedList
 */
const mergeTwoLists = function(list1, list2) {
    const mergedList = {val: -1, next: null};
    let tmpList = mergedList;

    while(list1 && list2) {
        if(list1.val > list2.val) {
            tmpList.next = list2;
            list2 = list2.next;
        } else {
            tmpList.next = list1;
            list1 = list1.next;
        }
        tmpList = tmpList.next;
    }
    tmpList.next = list1 || list2;
    return mergedList.next;
};