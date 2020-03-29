const {
  binarySearch,
  naiveStringSearch
} = require("./searching");

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
