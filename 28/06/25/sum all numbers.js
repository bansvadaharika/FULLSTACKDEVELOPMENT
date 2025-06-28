// Function to sum all numbers between two values (inclusive)
function sumAll(arr) {
  // Step 1: Find the smaller and larger number using Math.min and Math.max
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);

  // Step 2: Initialize a sum variable to keep track of the total
  let sum = 0;

  // Step 3: Loop from the smaller number to the larger number (inclusive)
  for (let i = min; i <= max; i++) {
    sum += i; // Add each number to the sum
  }

  // Step 4: Return the final total
  return sum;
}