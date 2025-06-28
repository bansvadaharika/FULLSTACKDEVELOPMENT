function frankenSplice(arr1, arr2, n) {
  // Copy arr2 to avoid mutation
  let result = arr2.slice();

  // Use splice to insert arr1's elements starting at index n
  result.splice(n, 0, ...arr1);

  return result;
}