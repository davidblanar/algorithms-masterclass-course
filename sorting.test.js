const {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  radixSort
} = require("./sorting");

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
