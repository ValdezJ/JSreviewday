//Create a function that takes in a sentence and returns only the consonants (removes the vowels).

var sent = "Testing a String"

function removeVowels(sentence){
  var vowels = ["a","e","i","o","u"]
  var sentanceAsArray = sentence.split("")
  var newArray = []
  sentanceAsArray.forEach(function(value){
    if (vowels.includes(value)) {
    }else{
      newArray.push(value);
    }
  })
  return newArray.join("");
}
removeVowels(sent)
