function maxSubArraySumWithK(arr, k) {
  let [sum, maxSum, left] = [0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (i - k === left) {
      sum -= arr[left];
      left++;
    }
    sum += arr[i];
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
}

const maxSubArraySum = (arr) => {
  let [sum, maxSum] = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sum = Math.max(0, sum);
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
};
console.log(maxSubArraySumWithK([2, 5, 3, 1, 11, 7, 6, 4], 3));
console.log(maxSubArraySum([0, 2, -2, 3, -4, 5, 1]));
