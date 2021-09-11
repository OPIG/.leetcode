/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  while(l1 != null && l2 != null) {
    if(l1.val > l2.val) {
      l2.next = mergeTwoLists(l1, l2.next)
      return l2
    } else {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
    }
  }

  if(l2 != null) {
    return l2
  }
  if(l1 != null) {
    return l1
  }
  return null
};
// @lc code=end

