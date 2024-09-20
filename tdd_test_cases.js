function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}
  

function transformArrayToObject(array) {
    return Object.fromEntries(array);
  }
  

  function capitalizeFirstLetter(string) {
    return string ? string[0].toUpperCase() + string.slice(1) : '';
  }
  
function convertToCamelCase(string) {
    return string
      .split(' ')
      .map((word, index) =>
        index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join('');
  }
  
  module.exports = {
    formatCurrency,
    transformArrayToObject,
    capitalizeFirstLetter,
    convertToCamelCase,
  };
  