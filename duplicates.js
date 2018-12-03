// Create a function that takes in two arrays of numbers and checks for duplicaters.
// The function should output a new array without duplicaters

// var a = [1,2,3,30,17]
// var b = [2,30,1,15]
// // expected output [1,2,3,17,15,30]
// function removeDuplicates(arr1, arr2){
//   newArr = []
// //compare arr1 element with arr2
// //if element of arr2 is not found in arr1, then push arr2 element
// //looping arr2
//   arr1.forEach(function(value){
//     if (arr2.includes(value)) {
//     }
//     else{newArr.push(value)
//     }
//   })
// var cleanArray = newArr.concat(arr2)
//   return cleanArray
// }
// removeDuplicates(a,b)


var a = [1, 2, 3, 30, 17];
var b = [2, 30, 1, 15, ];
var c = [2, 10, 19, 1, 3]
var d = [1, 3, 40, 32, 3]


function removeDuplicatesMulti(arr1, arr2, arr3, arr4){
  var combinedArr = arr1.concat(arr2, arr3, arr4)
  var finalArray = []
    combinedArr.forEach(function(value){
      if (finalArray.includes(value)){
    } else {
      finalArray.push(value)
      }
    })
      return finalArray
  }


removeDuplicatesMulti(a,b,c,d)
console.log(removeDuplicatesMulti(a,b,c,d));
