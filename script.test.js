const {
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
  mergeSort,
  quickSort,
  radixSort
} = require("./script");

describe("frequency counter pattern", () => {
  it("same", () => {
    expect(same([1,2,3], [4,1,9])).toBe(true);
    expect(same([1,2,3], [1,9])).toBe(false);
    expect(same([1,2,1], [4,4,1])).toBe(false);
    expect(same([1,2,1], [1,4,1])).toBe(false);
  });

  it("validAnagram", () => {
    expect(validAnagram("", "")).toBe(true);
    expect(validAnagram("aaz", "zza")).toBe(false);
    expect(validAnagram("anagram", "nagaram")).toBe(true);
    expect(validAnagram("rat", "car")).toBe(false);
    expect(validAnagram("awesome", "awesom")).toBe(false);
    expect(validAnagram("qwerty", "qeywrt")).toBe(true);
    expect(validAnagram("texttwisttime", "texttwisttime")).toBe(true);
  });

  it("sameFrequency", () => {
    expect(sameFrequency(182, 281)).toBe(true);
    expect(sameFrequency(34, 14)).toBe(false);
    expect(sameFrequency(3589578, 5879385)).toBe(true);
    expect(sameFrequency(22, 222)).toBe(false);
  });

  it("areThereDuplicates", () => {
    expect(areThereDuplicates(1, 2, 3)).toBe(false);
    expect(areThereDuplicates(1, 2, 2)).toBe(true);
    expect(areThereDuplicates("a", "b", "c", "a")).toBe(true);
  });
});

describe("multiple pointers pattern", () => {
  it("sumZero", () => {
    expect(sumZero([-2, 9, 1, 3])).toBe(undefined);
    expect(sumZero([1,2,3])).toBe(undefined);
    expect(sumZero([-3, -2, -1, 0, 1,2,3])).toEqual([-3, 3]);
  });

  it("countUniqueValues", () => {
    expect(countUniqueValues([1,1,1,1,1,1,2])).toBe(2);
    expect(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])).toBe(7);
    expect(countUniqueValues([])).toBe(0);
    expect(countUniqueValues([-2,-1,-1,0,1])).toBe(4);
  });

  it("averagePair", () => {
    expect(averagePair([], 4)).toBe(false);
    expect(averagePair([1,2,3], 2)).toBe(true);
    expect(averagePair([1,2,3], 2.5)).toBe(true);
    expect(averagePair([1,3,3,5,6,7,10,12,19], 8)).toBe(true);
    expect(averagePair([-1,0,3,4,5,6], 4.1)).toBe(false);
  });

  it("isSubsequence", () => {
    expect(isSubsequence("hello", "hello world")).toBe(true);
    expect(isSubsequence("sing", "sting")).toBe(true);
    expect(isSubsequence("abc", "abracadabra")).toBe(true);
    expect(isSubsequence("abc", "acb")).toBe(false);
  });
});

describe("sliding window pattern", () => {
  it("maxSubarraySum", () => {
    expect(maxSubarraySum([], 4)).toBe(null);
    expect(maxSubarraySum([4,2,1,6], 1)).toBe(6);
    expect(maxSubarraySum([1,2,5,2,8,1,5], 2)).toBe(10);
    expect(maxSubarraySum([1,2,5,2,8,1,5], 4)).toBe(17);
    expect(maxSubarraySum([4,2,1,6,2], 4)).toBe(13);
  });

  it("minSubArrayLen", () => {
    expect(minSubArrayLen([2,3,1,2,4,3], 7)).toBe(2);
    expect(minSubArrayLen([2,1,6,5,4], 9)).toBe(2);
    expect(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)).toBe(1);
    expect(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)).toBe(3);
    expect(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)).toBe(5);
    expect(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)).toBe(0);
  });

  it("findLongestSubstring", () => {
    expect(findLongestSubstring("")).toBe(0);
    expect(findLongestSubstring("bbbbbb")).toBe(1);
    expect(findLongestSubstring("abcabcd")).toBe(4);
    expect(findLongestSubstring("rithmschool")).toBe(7);
    expect(findLongestSubstring("thisisawesome")).toBe(6);
    expect(findLongestSubstring("thecatinthehat")).toBe(7);
    expect(findLongestSubstring("longestsubstring")).toBe(8);
    expect(findLongestSubstring("thisishowwedoit")).toBe(6);
  });
});

describe("recursion problem set 1", () => {
  it("power", () => {
    expect(power(2, 0)).toBe(1);
    expect(power(2, 2)).toBe(4);
    expect(power(2, 4)).toBe(16);
  });

  it("factorial", () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(4)).toBe(24);
    expect(factorial(7)).toBe(5040);
  });

  it("productOfArray", () => {
    expect(productOfArray([1,2,3])).toBe(6);
    expect(productOfArray([1,2,3,10])).toBe(60);
  });

  it("recursiveRange", () => {
    expect(recursiveRange(6)).toBe(21);
    expect(recursiveRange(10)).toBe(55);
  });

  it("fib", () => {
    expect(fib(4)).toBe(3);
    expect(fib(10)).toBe(55);
    expect(fib(28)).toBe(317811);
    expect(fib(35)).toBe(9227465);
    expect(fib(40)).toBe(102334155);
    expect(fib(43)).toBe(433494437);
  });
});

describe("recursion problem set 2", () => {
  it("reverse", () => {
    expect(reverse("")).toBe("");
    expect(reverse("a")).toBe("a");
    expect(reverse("ab")).toBe("ba");
    expect(reverse("abc")).toBe("cba");
    expect(reverse("awesome")).toBe("emosewa");
    expect(reverse("rithmschool")).toBe("loohcsmhtir");
  })
});

describe("searching", () => {
  it("binarySearch", () => {
    const arr = [1, 2, 6, 9, 23, 35, 89, 90, 443, 2345];
    expect(binarySearch([], 2)).toBe(-1);
    expect(binarySearch([2], 1)).toBe(-1);
    expect(binarySearch([2], 2)).toBe(0);
    expect(binarySearch([1, 2], 1)).toBe(0);
    expect(binarySearch([1, 2], 2)).toBe(1);
    expect(binarySearch([1, 2], 3)).toBe(-1);
    expect(binarySearch(arr, 1)).toBe(0);
    expect(binarySearch(arr, 2)).toBe(1);
    expect(binarySearch(arr, 23)).toBe(4);
    expect(binarySearch(arr, 35)).toBe(5);
    expect(binarySearch(arr, 89)).toBe(6);
    expect(binarySearch(arr, 2345)).toBe(9);
    expect(binarySearch(arr, 12)).toBe(-1);
    expect(binarySearch(arr, 0)).toBe(-1);
    expect(binarySearch(arr, 3000)).toBe(-1);
  });

  it("naiveStringSearch", () => {
    const str = "wowomgzomg";
    expect(naiveStringSearch(str, "o")).toBe(3);
    expect(naiveStringSearch(str, "wo")).toBe(2);
    expect(naiveStringSearch(str, "omg")).toBe(2);
    expect(naiveStringSearch(str, "zomg")).toBe(1);
    expect(naiveStringSearch(str, "asd")).toBe(0);
  });
});

describe("sorting", () => {
  it("bubbleSort", () => {
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort([1])).toEqual([1]);
    expect(bubbleSort([1,2])).toEqual([1,2]);
    expect(bubbleSort([2,1])).toEqual([1,2]);
    expect(bubbleSort([5,3,4,1,2])).toEqual([1,2,3,4,5]);
    expect(bubbleSort([8,1,2,3,4,5])).toEqual([1,2,3,4,5,8]);
    expect(bubbleSort([5,3,4,1,2,6,9,8,7])).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  it("selectionSort", () => {
    expect(selectionSort([])).toEqual([]);
    expect(selectionSort([1])).toEqual([1]);
    expect(selectionSort([1,2])).toEqual([1,2]);
    expect(selectionSort([2,1])).toEqual([1,2]);
    expect(selectionSort([2,3,1])).toEqual([1,2,3]);
    expect(selectionSort([5,3,4,1,2])).toEqual([1,2,3,4,5]);
    expect(selectionSort([8,1,2,3,4,5])).toEqual([1,2,3,4,5,8]);
    expect(selectionSort([5,3,4,1,2,6,9,8,7])).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  it("insertionSort", () => {
    expect(insertionSort([])).toEqual([]);
    expect(insertionSort([1])).toEqual([1]);
    expect(insertionSort([1,2])).toEqual([1,2]);
    expect(insertionSort([2,1])).toEqual([1,2]);
    expect(insertionSort([2,3,1])).toEqual([1,2,3]);
    expect(insertionSort([5,3,4,1,2])).toEqual([1,2,3,4,5]);
    expect(insertionSort([8,1,2,3,4,5])).toEqual([1,2,3,4,5,8]);
    expect(insertionSort([5,3,4,1,2,6,9,8,7])).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  it("mergeSort", () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([1,2])).toEqual([1,2]);
    expect(mergeSort([2,1])).toEqual([1,2]);
    expect(mergeSort([2,3,1])).toEqual([1,2,3]);
    expect(mergeSort([5,3,4,1,2,6,9,8,7])).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(mergeSort([8,1,2,3,4,5])).toEqual([1,2,3,4,5,8]);
  });

  it("quickSort", () => {
    expect(quickSort([])).toEqual([]);
    expect(quickSort([1])).toEqual([1]);
    expect(quickSort([1,2])).toEqual([1,2]);
    expect(quickSort([2,1])).toEqual([1,2]);
    expect(quickSort([2,3,1])).toEqual([1,2,3]);
    expect(quickSort([8,1,2])).toEqual([1,2,8]);
    expect(quickSort([5,3,4,1,2,6,9,8,7])).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(quickSort([8,1,2,3,4,5])).toEqual([1,2,3,4,5,8]);
  });

  it("radixSort", () => {
    expect(radixSort([])).toEqual([]);
    expect(radixSort([1])).toEqual([1]);
    expect(radixSort([1,2])).toEqual([1,2]);
    expect(radixSort([11,2])).toEqual([2,11]);
    expect(radixSort([2,1])).toEqual([1,2]);
    expect(radixSort([2,3,1])).toEqual([1,2,3]);
    expect(radixSort([8,1,2])).toEqual([1,2,8]);
    expect(radixSort([5,3,4,1,2,6,9,8,7])).toEqual([1,2,3,4,5,6,7,8,9]);
    expect(radixSort([8,1,2,3,4,5])).toEqual([1,2,3,4,5,8]);
    expect(radixSort([80,144,2])).toEqual([2,80,144]);
    expect(radixSort([1556,4,3556,593,408,4386,902,7,8157,86,9637,29]))
      .toEqual([4,7,29,86,408,593,902,1556,3556,4386,8157,9637]);
  });
});
