/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    return twoLoops(nums, target)
};


/* 72 ms */
const twoLoops = (nums, target) => {
    const lenNums = nums.length
    for (let i = 0; i < lenNums - 1; i++) {
        for (let j = i + 1; j < lenNums; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}