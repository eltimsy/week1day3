var charCount = new Object();

function UniqueLetters(value){
  var noSpace = value.split(" ").join("").split("").sort();
  var Letters = [];
  var last
  for(var i = 0; i < noSpace.length; i++){
    if(noSpace[i] !== last){
      Letters.push(last = noSpace[i]);
    }
  }
  return Letters
}

function countLetters(words){

  var stuff = UniqueLetters(words).join("");
  var countLetters = 0

  for(var i = 0; i < stuff.length; i++){
    for(var j = 0; j < words.length; j++){
      if(stuff[i] === words[j]){
        countLetters += 1;
      }
    }
    charCount[stuff[i]] = countLetters;
    countLetters = 0
  }
}
console.log(countLetters("hello asdlkfj llllaa"));
console.log(charCount);