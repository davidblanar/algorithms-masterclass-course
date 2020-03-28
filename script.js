// problem sets

function same(a1, a2) {
  if (a1.length === 0 && a2.length === 0) {
    return true;
  }
  if (a1.length !== a2.length) {
    return false;
  }
  const counter = {};
  for (const item of a1) {
    if (a2.includes(item * item)) {
      counter[item] = counter[item] ? counter[item] + 1 : 1;
    }
  }
  return Object.values(counter).every((item) => item % 2 !== 0);
}

function validAnagram(s1, s2) {
  if (s1.length === 0 && s2.length === 0) {
    return true;
  }
  if (s1.length !== s2.length) {
    return false;
  }
  const counter = {};
  for (const char of s1) {
    counter[char] = counter[char] ? counter[char] + 1 : 1;
  }
  for (const char of s2) {
    if (!counter[char]) {
      return false;
    }
    counter[char] = counter[char] - 1;
  }
  return true;
}

function sumZero(arr) {
  if (arr.length < 2) {
    return undefined;
  }
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex < endIndex) {
    const start = arr[startIndex];
    const end = arr[endIndex];
    if (start + end === 0) {
      return [start, end];
    } else if (start + end > 0) {
      startIndex++;
    } else {
      endIndex--;
    }
  }
  return undefined;
}

function countUniqueValues(arr) {
  if (arr.length < 2) {
    return arr.length;
  }
  let i = 0;
  let j = 1;
  let res = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      res++;
    }
    i++;
    j++;
  }
  return res;
}

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

function sameFrequency(n1, n2) {
  const counter1 = {};
  const counter2 = {};
  const s1 = n1.toString();
  const s2 = n2.toString();
  for (const char of s1) {
    counter1[char] = (typeof counter1[char] === "number") ? counter1[char] + 1 : 1;
  }
  for (const char of s2) {
    counter2[char] = (typeof counter2[char] === "number") ? counter2[char] + 1 : 1;
  }
  const keys1 = Object.keys(counter1);
  const keys2 = Object.keys(counter2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }
  return true;
}

function areThereDuplicates() {
  const args = Array.from(arguments);
  if (args.length < 2) {
    return false;
  }
  const counter = {};
  for (const arg of args) {
    counter[arg] = (typeof counter[arg] === "number") ? counter[arg] + 1 : 1;
    if (counter[arg] > 1) {
      return true;
    }
  }
  return false;
}

function averagePair(arr, avg) {
  function calcAvg(n1, n2) {
    return (n1 + n2) / 2;
  }
  if (arr.length === 0) {
    return false;
  }
  if (arr.length === 1 && arr[0] === avg) {
    return true;
  }
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex < endIndex) {
    if (calcAvg(arr[startIndex], arr[endIndex]) === avg) {
      return true;
    } else if (calcAvg(arr[startIndex], arr[endIndex]) < avg) {
      startIndex++;
    } else {
      endIndex--;
    }
  }
  return false;
}

function isSubsequence(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }
  let str = "";
  let j = 0;
  for (let i = 0; i < s2.length; i++) {
    if (s1[j] === s2[i]) {
      str += s1[j];
      j++;
    }
  }
  return s1 === str;
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

// recursion problem set 1
function power(n, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return n;
  }
  return n * power(n, exp - 1);
}

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function productOfArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(n){
  if (n === 1) {
    return 1;
  }
  return n + recursiveRange(n - 1);
}

function fib(n) {
  return (function calculate(num, memo) {
    if (num <= 2) {
      return 1;
    }
    if (!memo[num]) {
      memo[num] = calculate(num - 1, memo) + calculate(num - 2, memo);
    }
    return memo[num];
  })(n, {});
}

function reverse(str) {
  return (function reverseStr(s, acc) {
    if (s.length === 0) {
      return acc;
    }
    return reverseStr(s.slice(1), s[0]) + acc;
  })(str, "");
}

// searching
function binarySearch(arr, val) {
  if (arr.length === 0) {
    return -1;
  }
  if (arr.length === 1) {
    return arr[0] === val ? 0 : -1;
  }
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

function naiveStringSearch(str, val) {
  if (str.length === 0 || val.length > str.length) {
    return 0;
  }
  if (str === val) {
    return 1;
  }
  let i = 0;
  let count = 0;

  while (i < str.length) {
    let j = 0;
    if (str[i] === val[0]) {
      while(j < val.length) {
        if (val[j] === str[i + j]) {
          if (j === val.length - 1) {
            count++;
          }
          j++;
        } else {
          break;
        }
      }
    }
    i++;
  }
  return count;
}

// sorting
function swap(a, i1, i2) {
  const temp = a[i1];
  a[i1] = a[i2];
  a[i2] = temp;
}
function bubbleSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let alreadySorted = false;

  for (let i = arr.length - 1; i > 0; i--) {
    alreadySorted = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        alreadySorted = false;
        swap(arr, j, j + 1);
      }
    }
    if (alreadySorted) {
      break;
    }
  }
  return arr;
}

function selectionSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) {
        idx = j;
      }
    }
    if (idx !== i) {
      swap(arr, idx, i);
    }
  }
  return arr;
}

function insertionSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  function merge(a1, a2) {
    const res = [];
    let i = 0;
    let j = 0;
    while (true) {
      // both arrays were fully merged - exit
      if (i === a1.length && j === a2.length) {
        break;
      }
      // array1 was fully merged but one element in array2 remains
      // push the remaining element into the result array
      // and advance to the next iteration of the loop
      if (i === a1.length && j !== a2.length) {
        res.push(a2[j]);
        j++;
        continue;
      }
      // array2 was fully merged but one element in array1 remains
      // push the remaining element into the result array
      // and advance to the next iteration of the loop
      if (i !== a1.length && j === a2.length) {
        res.push(a1[i]);
        i++;
        continue;
      }
      if (a1[i] < a2[j]) {
        // if the currently looked at item in array1 is smaller
        // than the currently looked at item in array2
        // push it into the result array
        res.push(a1[i]);
        // move the cursor to the next item in array1
        i++;
      } else {
        // else push the item from array2 it into the result array
        res.push(a2[j]);
        // move the cursor to the next item in array2
        j++;
      }
    }
    return res;
  }

  const mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

module.exports = {
  same,
  validAnagram,
  sumZero,
  countUniqueValues,
  maxSubarraySum,
  sameFrequency,
  areThereDuplicates,
  averagePair,
  isSubsequence,
  minSubArrayLen,
  findLongestSubstring,
  power,
  factorial,
  productOfArray,
  recursiveRange,
  fib,
  reverse,
  binarySearch,
  naiveStringSearch,
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort
};
