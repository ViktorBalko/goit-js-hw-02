function checkStorage(available, ordered) {
  // Change code below this line
  // let message;

  if (ordered === 0) {
    return "Your order is empty!";
    // return;
  } 
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
    // return;
  } 
    return "The order is accepted, our manager will contact you";
  

  // return message;
  // Change code above this line
}
