function maxSubArraySum(list){
    let sum = 0;
    let maxSum = 0;
    for(let idx in list){
        maxSum = Math.max(maxSum , sum + list[idx] );
        sum = Math.max(sum + list[idx] , 0)
    }
    return maxSum;
}

console.log(maxSubArraySum([6,-2,1,-3,-2,4,-2,5,1,-5,4]))


function maxSubArray(list) {
    let currentSum = 0;
    let maxSubarraySum = -Infinity; // Initialize to a very small value
    let left = 0;
    let right = 0;
    let start = 0; // Start index of the current subarray

    for (let i = 0; i < list.length; i++) {
        currentSum += list[i];

        if (currentSum > maxSubarraySum) {
            maxSubarraySum = currentSum;
            left = start;
            right = i;
        }

        if (currentSum <= 0) {
            currentSum = 0;
            start = i + 1;
        }
    }

    return [list.slice(left, right + 1), maxSubarraySum];
}


console.log(maxSubArray([6,-2,1,-3,-2,4,-2,5,1,-5,4]))
