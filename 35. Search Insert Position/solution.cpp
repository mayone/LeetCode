class Solution {
   public:
    int searchInsert(vector<int>& nums, int target) {
        int lenNums = nums.size();
        for (int i = 0; i < lenNums; i++) {
            if (nums[i] >= target) {
                return i;
            }
        }
        return lenNums;
    }
};