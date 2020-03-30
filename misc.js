function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function harmlessRansomNote(noteText, magazineText) {
  const map = {};
  const noteArr = noteText.split(" ");
  const magazineArr = magazineText.split(" ");
  for (let i = 0; i < magazineArr.length; i++) {
    const item = magazineArr[i];
    map[item] = map[item] ? map[item] + 1 : 1;
  }
  for (let i = 0; i < noteArr.length; i++) {
    const item = noteArr[i];
    if (typeof map[item] === "undefined") {
      return false;
    }
    map[item] = map[item] - 1;
    if (map[item] < 0) {
      return false;
    }
  }
  return true;
}

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

function caesarCipher(str, n) {
  if (n === 0) {
    return str;
  }
  const num = n < 0 ? (26 + n) % 26 + 26 : n % 26;
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const asciiCode = str.charCodeAt(i);

    if (asciiCode >= 97 && asciiCode <= 122) {
      // lowercase
      res += String.fromCharCode((asciiCode + num - 97) % 26 + 97);
    } else if (asciiCode >= 65 && asciiCode <= 90) {
      // uppercase
      res += String.fromCharCode((asciiCode + num - 65) % 26 + 65);
    } else {
      // other
      res += str[i];
    }
  }
  return res;
}

function reverseWords(str) {
  function reverseString(s) {
    let res = "";
    for (let i = s.length - 1; i >= 0; i--) {
      res += s[i];
    }
    return res;
  }
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = reverseString(arr[i]);
  }
  return arr.join(" ");
}

function reverseArrayInPlace(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

function meanMedianMode(arr) {
  if (arr.length === 0) {
    return { mean: null, median: null, mode: [] };
  }
  if (arr.length === 1) {
    return { mean: arr[0], median: arr[0], mode: arr };
  }

  function getMean(a) {
    return a.reduce((acc, curr) => acc + curr , 0) / a.length;
  }

  function getMedian(a) {
    const sorted = a.sort((a, b) => a - b);
    const mid = Math.floor(a.length / 2);

    if (a.length % 2 === 0) {
      return (sorted[mid] + sorted[mid - 1]) / 2;
    } else {
      return sorted[mid];
    }
  }

  function getMode(a) {
    const map = {};
    for (let i = 0; i < a.length; i++) {
      const item = a[i];
      map[item] = map[item] ? map[item] + 1 : 1;
    }
    let highest = -Infinity;
    let modes = [];
    for (const [key, value] of Object.entries(map)) {
      if (value > highest) {
        highest = value;
        modes = [parseInt(key)];
      } else if (value === highest) {
        modes.push(parseInt(key));
      }
    }
    if (Object.keys(map).length === modes.length) {
      modes = [];
    }
    return modes;
  }

  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };
}

function twoSum(arr, sum) {
  const res = [];
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!map[item]) {
      map[item] = true;
    }
    if (map[sum - item]) {
      res.push([sum - item, item]);
    }
  }
  return res;
}

function sieveOfEratosthenes(n) {
  const primes = [];
  for (let i = 0; i <= n; i++) {
    primes.push(true);
  }

  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    for (let j = 2; j * i <= n; j++) {
      primes[j * i] = false;
    }
  }

  const res = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) {
      res.push(i);
    }
  }
  return res;
}

function maxStockProfit(prices) {
  if (prices.length < 2) {
    return 0;
  }
  let lowest = Infinity;
  let highest = -Infinity;
  let res = 0;

  for (let i = 0; i < prices.length; i++) {
    const item = prices[i];
    if (item < lowest) {
      lowest = item;
      highest = item;
    }
    if (item > highest) {
      highest = item;
    }
    res = highest - lowest;
  }
  return res;
}

module.exports = {
  harmlessRansomNote,
  isPalindrome,
  caesarCipher,
  reverseWords,
  reverseArrayInPlace,
  meanMedianMode,
  twoSum,
  sieveOfEratosthenes,
  maxStockProfit
};
