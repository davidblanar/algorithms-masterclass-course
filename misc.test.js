const {
  harmlessRansomNote,
  isPalindrome,
  caesarCipher,
  reverseWords,
  reverseArrayInPlace,
  meanMedianMode
} = require("./misc");

describe("misc", () => {
  it("harmlessRansomNote", () => {
    expect(harmlessRansomNote("a", "a")).toBe(true);
    expect(harmlessRansomNote("a", "b")).toBe(false);
    expect(harmlessRansomNote("a a", "a")).toBe(false);
    expect(harmlessRansomNote("a b", "b a")).toBe(true);
    expect(harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'))
      .toBe(true);
  });

  it("isPalindrome", () => {
    expect(isPalindrome("a")).toBe(true);
    expect(isPalindrome("abba")).toBe(true);
    expect(isPalindrome("asd")).toBe(false);
    expect(isPalindrome("asa")).toBe(true);
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("madamimadam")).toBe(true);
    expect(isPalindrome("thisisatest")).toBe(false);
  });

  it("caesarCipher", () => {
    expect(caesarCipher("zoo keeper", 2)).toBe("bqq mggrgt");
    expect(caesarCipher("Zoo Keeper", 2)).toBe("Bqq Mggrgt");
    expect(caesarCipher("Big Car", -16)).toBe("Lsq Mkb");
    expect(caesarCipher("zoo keeper", 28)).toBe("bqq mggrgt");
    expect(caesarCipher("Javascript", -900)).toBe("Tkfkcmbszd");
  });

  it("reverseWords", () => {
    expect(reverseWords("this is a string of words"))
      .toBe("siht si a gnirts fo sdrow");
    expect(reverseWords("Coding Javascript")).toBe("gnidoC tpircsavaJ");
  });

  it("reverseArrayInPlace", () => {
    expect(reverseArrayInPlace([1,2,3,4,5])).toEqual([5,4,3,2,1]);
    expect(reverseArrayInPlace([1,2,3,4])).toEqual([4,3,2,1]);
  });

  it("meanMedianMode", () => {
    expect(meanMedianMode([])).toEqual({ mean: null, median: null, mode: [] });
    expect(meanMedianMode([4])).toEqual({ mean: 4, median: 4, mode: [4] });
    expect(meanMedianMode([1,3])).toEqual({ mean: 2, median: 2, mode: [] });
    expect(meanMedianMode([1,3,5])).toEqual({ mean: 3, median: 3, mode: [] });
    expect(meanMedianMode([1,3,5,3,3])).toEqual({ mean: 3, median: 3, mode: [3] });
    expect(meanMedianMode([1,2,3,4,5,4,6,1]))
      .toEqual({ mean: 3.25, median: 3.5, mode: [1,4] });
    expect(meanMedianMode([9,10,23,10,23,9]))
      .toEqual({ mean: 14, median: 10, mode: [] });
  })
});
