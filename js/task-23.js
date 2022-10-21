function filterArray(numbers, value) {
   // Change code below this line

let highNumbers = [];
for (let number of numbers) {
  if (number > value) {
    highNumbers.push(number);
  }
} 
  return highNumbers;

  // Change code above this line
}