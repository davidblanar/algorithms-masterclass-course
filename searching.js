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

module.exports = {
  binarySearch,
  naiveStringSearch
};
