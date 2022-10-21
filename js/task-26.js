function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let orderItem of order) {
  total += orderItem;
}
//  for (let i = 0; i < order.length; i += 1) {
   // total += order[i];
 // }

  // Change code above this line
  return total;
}
