function getCommonElements(array1, array2) {
  // Change code below this line
let allArray = [];
  for (let elements of array1) {
    if (array2.includes(elements)) {
      allArray.push(elements)
    }
  }
return allArray;

 // Change code above this line
}