//  1. Get 1 to 255
//  Write a function that returns an array with all the numbers from 1 to 255.

function greeting() {
  var arr = [];
  for (let index = 1; index <= 255; index++) {
    arr.push(index);
  }
  return arr;
}
console.log(greeting());

//  2.Get even 1000
//  Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function SumEvenNumber() {
  var sum = 0;
  for (let index = 1; index <= 1000; index++) {
    if (index % 2 == 0) sum += index;
  }
  return sum;
}
console.log(SumEvenNumber());

//  3.Sum odd 5000
//  Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function SumOddNumber() {
  var sum = 0;
  for (let index = 1; index <= 5000; index++) {
    if (!index % 2 == 0) sum += index;
  }
  return sum;
}
console.log(SumOddNumber());

//  4.Iterate an array
//  Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function SumIterate() {
  var arr = [1, 2, 5];
  var sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
}
console.log(SumIterate());

//  5.Find max
//  Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function FindMax() {
  var arr = [-3, 3, 5, 7];
  var max = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (max < arr[index]) max = arr[index];
  }
  return max;
}
console.log(FindMax());

//  6.Find average
//  Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function FindAvg() {
  var arr = [1, 3, 5, 7, 20];
  var sum = 0;
  var ctr = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
    ctr++;
  }

  avg = sum / ctr;
  return avg;
}
console.log(FindAvg());

//  7.Array odd
//  Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function ArrayOdd() {
  var arr = [];
  for (let index = 1; index <= 50; index++) {
    if (index % 2 != 0) arr.push(index);
  }
  return arr;
}
console.log(ArrayOdd());

//  8.Greater than Y
//  Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.
//  For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2.
//  (There are two values in the array greater than 3, which are 5, 7).

function GreaterthanY() {
    var arr = [1, 3, 5, 7];
    var Y = 3
    var ctr = 0
    for (let index = 0; index < arr.length; index++) {
      if(Y < arr[index])
      ctr++
    }
  
    return ctr;
  }
  console.log(GreaterthanY());
  



// 9.Squares
// Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.
// (e.g. [1,5,10,-2] will become [1,25,100,4])

function Squares() {
  var arr = [1, 5, 10, -2];
  for (let index = 0; index < arr.length; index++) {
    arr[index] = arr[index] * arr[index];
  }

  return arr;
}
console.log(Squares());



// 10.Negatives
// Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0.
// When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function Negatives() {
  var arr = [1, 5, 10, -2];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < 0) arr[index] = 0;
  }

  return arr;
}
console.log(Negatives());



// 11. Max/Min/Avg
// Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum,
// and average values of the original array.
// (e.g. [1,5,10,-2] will return [10,-2,3.5])

function FindMaxMinAvg() {
  var arr = [1, 5, 10, -2];
  var sum = 0;
  var ctr = 0;
  var newarr = [];
  var max = arr[0];
  var min = arr[0];
  var avg = 0;
  for (let index = 1; index < arr.length; index++) {
    sum += arr[index];

    if (max < arr[index]) max = arr[index];

    if (min > arr[index]) min = arr[index];

    ctr++;
  }

  avg = sum / ctr;

  newarr.push(max);
  newarr.push(min);
  newarr.push(avg);
  return newarr;
}
console.log(FindMaxMinAvg());



// 12.Swap Value
// Write a function that will swap the first and last values of any given array.
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function SwapValue() {
  var arr = [1, 5, 10, -2];
  var firstelement = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (index == arr.length-1 ) {
    arr[0] = arr[index];
    arr[index] = firstelement;
    }
  }
  return arr;
}
console.log(SwapValue());


// 13.Number to String
// Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function NumbertoString() {
    var arr = [-1,-3,2];
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] < 0)
       arr[index] = 'Dojo';
    }
  
    return arr;
  }
  console.log(NumbertoString());

