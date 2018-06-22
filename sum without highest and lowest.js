function sumArray(array) {
// Sort elements in a new array
  const SORTED_ARRAY = array.sort(function(a, b){return a - b});
  SORTED_ARRAY.shift();
  SORTED_ARRAY.pop();
  return SORTED_ARRAY.reduce(function(a, b){ return a + b; }, 0);
}