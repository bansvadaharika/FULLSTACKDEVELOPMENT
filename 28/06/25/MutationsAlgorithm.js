function mutation(arr) {
  // Convert both strings to lowercase
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();

  // Loop through each character in second
  for (let i = 0; i < second.length; i++) {
    // If any letter is not found, return false
    if (first.indexOf(second[i]) === -1) {
      return false;
    }
  }

  // All letters were found
  return true;
}
