function chunkArrayInGroups(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i += size) {
    // slice from i to i + size (exclusive)
    let chunk = arr.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}