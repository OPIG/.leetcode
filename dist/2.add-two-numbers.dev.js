"use strict";

/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
var addTwoNumbers = function addTwoNumbers(l1, l2) {
  var dumpy = new ListNode(-1),
      node = new ListNode(-1);
  dumpy.next = node;
  var carry = 0,
      curSum = 0;

  while (l1 || l2 || carry) {
    curSum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = curSum > 9 ? 1 : 0;
    curSum %= 10;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    node.next = new ListNode(curSum);
    node = node.next;
  }

  return dumpy.next.next;
}; // @lc code=end