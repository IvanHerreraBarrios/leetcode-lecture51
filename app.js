var findDuplicates = function(nums) {
    const result = []
    for(let i=0; i < nums.length; i++){
        const pos = Math.abs(nums[i])
        if(nums[pos-1] < 0){
            result.push(pos)
        } else {
            nums[pos-1] = -1 * nums[pos-1]
        }
    }
    return result
};