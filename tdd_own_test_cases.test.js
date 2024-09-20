// tdd_own_test_cases.test.js
const { isAllCaps, countVowels, mergeAndSortArrays, findDuplicates } = require('./tdd_own_test_cases');

describe("isAllCaps", () => {
  test('should return true for all caps', () => {
    expect(isAllCaps("HELLO")).toBe(true);
  });

  test('should return false if not all caps', () => {
    expect(isAllCaps("Hello")).toBe(false);
  });
});

describe("countVowels", () => {
  test('should count vowels correctly in "banana"', () => {
    expect(countVowels("banana")).toBe(3);
  });

  test('should return 0 for no vowels in "sky"', () => {
    expect(countVowels("sky")).toBe(0);
  });
});

describe("mergeAndSortArrays", () => {
  test('should merge and sort two arrays [3, 1] and [4, 2]', () => {
    expect(mergeAndSortArrays([3, 1], [4, 2])).toEqual([1, 2, 3, 4]);
  });
});

describe("findDuplicates", () => {
  test('should find duplicates [2, 4] in [1, 2, 2, 3, 4, 4]', () => {
    expect(findDuplicates([1, 2, 2, 3, 4, 4])).toEqual([2, 4]);
  });
});
git add .