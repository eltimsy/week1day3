

function noSpaces(value){
  var noSpace = value.split(" ").join("").split("").sort();
  return noSpace
}

function countLetters(words){
  var charCount = new Object();
  var stuff = noSpaces(words).join("");
  var countLetters = 0;
  var letterPosition = [];

  for(var i = 0; i < stuff.length; i++){
    for(var j = 0; j < words.length; j++){
      if(stuff[i] === words[j]){
        countLetters += 1;
        letterPosition.push(j)
      }
    }
    charCount[stuff[i]] = [countLetters,letterPosition];
    letterPosition = [];
    countLetters = 0;
  }
  return charCount;
}
console.log(countLetters("hello asdlkfj llllaa"));
