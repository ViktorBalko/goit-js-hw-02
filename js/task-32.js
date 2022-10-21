function includes(array, value) {
  // Change code below this line
 let flag = false;
for (let arrayItem of array) {
  if (arrayItem === value) {
    flag = true;
    break; 
  }
   
}
  return flag;
  
  // Change code above this line
}
