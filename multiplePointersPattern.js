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

module.exports = {
  averagePair,
  countUniqueValues,
  isSubsequence,
  sumZero
};
