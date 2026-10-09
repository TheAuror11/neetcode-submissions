class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasArr = [];

        for (let i = 0; i < nums.length; i++) {
            hasArr[nums[i]] = (hasArr[nums[i]] || 0) + 1;

            if (hasArr[nums[i]] > 1) {
                return true;
            }
        }
        return false
    }
}
