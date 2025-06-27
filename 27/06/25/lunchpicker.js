// 1. Create lunches variable as empty array
let lunches = [];

// 2. Function to add lunch to the end
function addLunchToEnd(arr, item) {
  arr.push(item);
  console.log(item + " added to the end of the lunch menu.");
  return arr;
}

// 3. Function to add lunch to the start
function addLunchToStart(arr, item) {
  arr.unshift(item);
  console.log(item + " added to the start of the lunch menu.");
  return arr;
}

// 4. Function to remove the last lunch
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = arr.pop();
    console.log(removed + " removed from the end of the lunch menu.");
  }
  return arr;
}

// 5. Function to remove the first lunch
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = arr.shift();
    console.log(removed + " removed from the start of the lunch menu.");
  }
  return arr;
}

// 6. Function to get a random lunch
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    const index = Math.floor(Math.random() * arr.length);
    const item = arr[index];
    console.log("Randomly selected lunch: " + item);
  }
}

// 7. Function to show the lunch menu
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log("Menu items: " + arr.join(", "));
  }
}
