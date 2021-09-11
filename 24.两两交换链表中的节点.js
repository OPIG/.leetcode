/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  while(cur.next != null && cur.next.next != null) {
    let n1 = cur.next
    let n2 = cur.next.next
    n1.next = n2.next
    n2.next = n1
    cur.next = n2
    cur = n1
  }

  return dummy.next
};
// @lc code=end

