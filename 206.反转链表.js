/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
  let pre = null
  let dummy = head
  while(dummy) {
    // const temp = dummy.next
    // dummy.next = pre
    // pre = dummy
    // dummy = temp
    [dummy.next, pre, dummy] = [pre, dummy, dummy.next]
  }
  return pre
};
// @lc code=end

