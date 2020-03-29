function same(a1, a2) {
  if (a1.length === 0 && a2.length === 0) {
    return true;
  }
  if (a1.length !== a2.length) {
    return false;
  }
  const counter = {};
  for (const item of a1) {
    if (a2.includes(item * item)) {
      counter[item] = counter[item] ? counter[item] + 1 : 1;
    }
  }
  return Object.values(counter).every((item) => item % 2 !== 0);
}

function validAnagram(s1, s2) {
  if (s1.length === 0 && s2.length === 0) {
    return true;
  }
  if (s1.length !== s2.length) {
    return false;
  }
  const counter = {};
  for (const char of s1) {
    counter[char] = counter[char] ? counter[char] + 1 : 1;
  }
  for (const char of s2) {
    if (!counter[char]) {
      return false;
    }
    counter[char] = counter[char] - 1;
  }
  return true;
}

function sameFrequency(n1, n2) {
  const counter1 = {};
  const counter2 = {};
  const s1 = n1.toString();
  const s2 = n2.toString();
  for (const char of s1) {
    counter1[char] = (typeof counter1[char] === "number") ? counter1[char] + 1 : 1;
  }
  for (const char of s2) {
    counter2[char] = (typeof counter2[char] === "number") ? counter2[char] + 1 : 1;
  }
  const keys1 = Object.keys(counter1);
  const keys2 = Object.keys(counter2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }
  return true;
}

function areThereDuplicates() {
  const args = Array.from(arguments);
  if (args.length < 2) {
    return false;
  }
  const counter = {};
  for (const arg of args) {
    counter[arg] = (typeof counter[arg] === "number") ? counter[arg] + 1 : 1;
    if (counter[arg] > 1) {
      return true;
    }
  }
  return false;
}

module.exports = {
  validAnagram,
  areThereDuplicates,
  same,
  sameFrequency
};
