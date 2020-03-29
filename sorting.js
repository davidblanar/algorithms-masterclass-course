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
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));
  return merge(leftArr, rightArr);
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  function pivot(a) {
    let pivotIdx = 0;
    const pivot = a[pivotIdx];
    for (let i = 1; i < a.length; i++) {
      if (pivot > a[i]) {
        pivotIdx++;
        swap(a, i, pivotIdx);
      }
    }
    swap(a, 0, pivotIdx);
    return pivotIdx;
  }
  const pivotIdx = pivot(arr);
  const leftArr = arr.slice(0, pivotIdx + 1);
  const rightArr = arr.slice(pivotIdx + 1);
  return quickSort(leftArr).concat(quickSort(rightArr));
}

function radixSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  function getDigit(int, idx) {
    return Math.floor(Math.abs(int) / Math.pow(10, idx)) % 10;
  }

  function digitCount(int) {
    if (int === 0) {
      return 1;
    }
    return Math.floor(Math.log10(Math.abs(int))) + 1;
  }

  function mostDigits(a) {
    let highest = 0;
    for (let i = 0; i < a.length; i++) {
      const count = digitCount(a[i]);
      if (count > highest) {
        highest = count;
      }
    }
    return highest;
  }

  const largestNumDigitsCount = mostDigits(arr);
  for (let i = 0; i < largestNumDigitsCount; i++) {
    const buckets = Array.from(Array(10)).map(() => []);
    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  radixSort
};
