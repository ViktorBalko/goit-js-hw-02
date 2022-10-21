function findLongestWord(string) {
  // Change code below this line
  
const joinString = string.split(" ");
    let longest = 0;
    let word = null;
    joinString.forEach(function(joinString) {
        if (longest < joinString.length) {
            longest = joinString.length;
            word = joinString;
        }
    });
    return word;


  // Change code above this line
}