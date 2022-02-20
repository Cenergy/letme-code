/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    return String(x)===String(x).split("").reverse().join("");

};
// @lc code=end
// const aaa=-121
// const isPalind=isPalindrome(aaa);
// console.log("🚀 ~ file: 9.回文数.js ~ line 20 ~ isPalind", isPalind)