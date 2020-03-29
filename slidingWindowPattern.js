function maxSubarraySum(arr, n) {
  if (n > arr.length) {
    return null;
  }
  let maxSum = 0;
  let tempSum;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

function minSubArrayLen(arr, n) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < n && end < arr.length){
      total += arr[end];
      end++;
    }
      // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= n){
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    }
      // current total less than required total but we reach the end,
    // need this or else we'll be in an infinite loop
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

function findLongestSubstring(str) {
  let longest = 0;
  const seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

module.exports = {
  findLongestSubstring,
  maxSubarraySum,
  minSubArrayLen
};
