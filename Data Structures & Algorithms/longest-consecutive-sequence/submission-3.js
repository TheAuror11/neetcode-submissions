class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let store = new Set(nums)
        let ans = 0;
        for(let num of nums){
            if(store.has(num-1)) continue;
            let len = 1
            while(store.has(num+len)){
                len++
            }
            ans = Math.max(len, ans)
        }
        return ans
    }
}
