/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * 暴力解法
 */
var addTwoNumbers = function (l1, l2) {
  var res = new ListNode()
  var cur = res
  var digital = 0
  while (l1!=null || l2!=null) {
    var total = digital
    if(l1 != null) {
      total += l1.val
      l1 = l1.next
    }
    if(l2 != null) {
      total += l2.val
      l2 = l2.next
    }
    digital = Math.floor(total / 10)
    cur.next = new ListNode(total % 10)
    cur = cur.next
  }
  if(digital !=0) {
    cur.next = new ListNode(digital)
  }
  return res.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end
