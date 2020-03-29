const {
  power,
  factorial,
  productOfArray,
  recursiveRange,
  fib,
  reverse
} = require("./recursion");

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
