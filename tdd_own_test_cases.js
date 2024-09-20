function isAllCaps(string) {
    return string === string.toUpperCase();
  }
  
  function countVowels(string) {
    return (string.match(/[aeiou]/gi) || []).length;
  }
  
  function mergeAndSortArrays(array1, array2) {
    return array1.concat(array2).sort((a, b) => a - b);
  }
  
  function findDuplicates(arr) {
    const duplicates = [];
    const seen = new Set();
  
    for (const num of arr) {
      if (seen.has(num)) {
        if (!duplicates.includes(num)) {
          duplicates.push(num);
        }
      } else {
        seen.add(num);
      }
    }
  
    return duplicates;
  }
  
  module.exports = {
    isAllCaps,
    countVowels,
    mergeAndSortArrays,
    findDuplicates,
  };
  