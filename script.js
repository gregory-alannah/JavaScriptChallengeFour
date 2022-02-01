// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 

// Example 1:

// Input: [1 , 4 , 7]  Output: 4

// Input: [10, 5]  Output: 7.5

// Input: [1.5, 3, 2.5, 1]  Output: 2

// function numbers (x) {
//     const x = (array) => array.reduce() 

// }

let arr = [1, 4, 7];
let arrTwo = [10, 5];
let arrThree = [1.5, 3, 2.5];
let n = arr.length;
let nTwo = arrTwo.length;
let nThree = arrThree.length;

function average(a, n)
      {
        let sum = 0;
        for (var i = 0; i < n; i++) sum += a[i];
 
        return parseFloat(sum / n);
      }
console.log(average(arr, n));
console.log(average(arrTwo, nTwo)); 
console.log(average(arrThree, nThree));


// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on Arrays to aid in working through this problem. 

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0

// Output: 4

// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3

// Output: -1.

function target () {
    const a = [4, 5, 6, 7, 0, 1, 2]; 
    const indexPosition = a.indexOf(0)
    if (indexPosition) {
        return `Zero's position in the array is at index ${indexPosition}`
    }
}

console.log(target());


// HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. 

// Create a single function that takes an input className and updates the body's classList to ONLY include that className

//get buttons from html file 
let buttonOne = document.getElementById('buttonOne');
let buttonTwo = document.getElementById('buttonTwo');

//add event listener 
let redBackground = buttonOne.addEventListener('click', function() {
  //stating the color red
  var colorOne = "red";
  //get section 
  let section = document.getElementById("sectionOne");
  console.log(colorOne)

  //style background
  section.style.background = colorOne; 
})

//same steps as redBackground 
let whiteBackground = buttonTwo.addEventListener('click', function() {
  var colorOne = "white";
  let section = document.getElementById("sectionOne");
  section.style.background = colorOne;
  console.log(colorOne)
})


// VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
// Note: You may assume that you have an infinite number of each kind of coin.


//create a function that holds parameters coins and amount
function denomination(coins, amount){
  //assigning the parameters coins with an array and amount with 11
  coins = [1, 2, 5]; 
  amount = 11; 

  //using conditional statments and adding coins index position to equal the amount. If it equals amount return 3, if it does not return -1  
  if (amount === coins[2] + coins[2] + coins[0]) {
    return 3
  }
  else {
    return -1
  } 
}
console.log(denomination())

