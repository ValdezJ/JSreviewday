// // Create a function that takes in a word and returns whether or not the word s a palindrome (same forwards and backwards)
// //Function to take 1 argument
//   //function palindrome(word)
// //Variable to have "string" in reverse
// //Method to reverse the "string"
// // if code - to return whether or not a "string" is a palindrome
//
// var testWord = "pod"
// function palindrome(word){
//   var reverseWord = word.split("").reverse().join("");
//   if (word===reverseWord){
//     return word + " is a palindrome"
//   } else if (word!==reverseWord){
//     return word + " is not a palindrome"
//   }
// }
// console.log(palindrome(testWord));
//


var testWord = "dAmmit im mad"
//Create function to remove spaces & convert Capital Letters to lower case
// function tidyUp(word){
//
//   return tidiedWord;
// }
// Create a function that takes in a word and returns whether or not the word s a palindrome (same forwards and backwards)
//Function to take 1 argument
function palindrome(word){
  var whiteSpaceRegex = /\s/g
  var tidiedWord = word.toLowerCase().replace(whiteSpaceRegex,'')
  //Variable to have "string" in reverse
  //Method to reverse the "string"
  var reverseWord = tidiedWord.split("").reverse().join("");
  // if code - to return whether or not a "string" is a palindrome
  if (reverseWord===tidiedWord){
    return word + " is a palindrome"
  } else if (reverseWord!==tidiedWord){
    return word + " is not a palindrome"
  }
}

// tidyUp(testWord)
console.log(palindrome(testWord));
