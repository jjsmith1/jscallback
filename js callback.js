let ages = [34, 55, 19, 21, 90];

// Returns true if all elements in arr pass a test defined in fn
function every(arr, callback) {
  let results = true;
  for (const element of arr) {
    if (!callback(element)) {
      results = false;
    }
  }
  return results;
}

console.log(every(ages, overEighteen));

function overEighteen(age) {
  return age > 18;
}
