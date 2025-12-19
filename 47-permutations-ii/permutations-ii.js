/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const result = [];
    const used = Array(nums.length).fill(false);

    nums.sort((a,b) => a - b);
    const len = nums.length;

    function backtracking(currentPermutation){
        if(currentPermutation.length == len){
            result.push([...currentPermutation]);
            return;
        }

        for(let i = 0; i < len; i++){

            if(used[i]) continue;
            if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
            

            used[i] = true;
            currentPermutation.push(nums[i]);
            backtracking(currentPermutation);

            currentPermutation.pop();
            used[i]= false;
        }
    }
    backtracking([]);
    return result;
};
