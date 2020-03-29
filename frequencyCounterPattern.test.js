const {
  same,
  validAnagram,
  sameFrequency,
  areThereDuplicates
} = require("./frequencyCounterPattern");

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
