function isAllCaps(string) {
    return string === string.toUpperCase();
  }
  
  function countVowels(string) {
    return (string.match(/[aeiou]/gi) || []).length;
  }
  
  function mergeAndSortArrays(array1, array2) {
    return array1.concat(array2).sort((a, b) => a - b);
  }
  
  function findDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) !== index && array.indexOf(item) === index);
  }
  
  module.exports = {
    isAllCaps,
    countVowels,
    mergeAndSortArrays,
    findDuplicates,
  };
  