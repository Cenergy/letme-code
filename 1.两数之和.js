/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map=new Map();
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const otherIndex=map.get(target-element);
        if(otherIndex!==undefined) return [otherIndex,index]
        map.set(element,index)
    }
    return []
};
// @lc code=end

// const nums=[2,7,11,15];
// const target=10;
// const targetIndex=twoSum(nums,target)
// console.log("🚀 ~ file: 1.两数之和.js ~ line 27 ~ targetIndex", targetIndex)


