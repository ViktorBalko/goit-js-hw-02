function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line

let calculate = 1;
  for (const letter of message){
    if (letter === ' '){
      calculate += 1;
    }
  }
  return calculate * pricePerWord;

   // Change code above this line
}