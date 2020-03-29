// recursion problem set 1
function power(n, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return n;
  }
  return n * power(n, exp - 1);
}

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function productOfArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(n){
  if (n === 1) {
    return 1;
  }
  return n + recursiveRange(n - 1);
}

function fib(n) {
  return (function calculate(num, memo) {
    if (num <= 2) {
      return 1;
    }
    if (!memo[num]) {
      memo[num] = calculate(num - 1, memo) + calculate(num - 2, memo);
    }
    return memo[num];
  })(n, {});
}

function reverse(str) {
  return (function reverseStr(s, acc) {
    if (s.length === 0) {
      return acc;
    }
    return reverseStr(s.slice(1), s[0]) + acc;
  })(str, "");
}

module.exports = {
  fib,
  recursiveRange,
  productOfArray,
  factorial,
  power,
  reverse
};
