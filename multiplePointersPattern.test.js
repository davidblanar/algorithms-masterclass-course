const {
  sumZero,
  countUniqueValues,
  averagePair,
  isSubsequence
} = require("./multiplePointersPattern");

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
