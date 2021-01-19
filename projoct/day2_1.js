
// const arr1 = ["a", "b", "c"];
// const expected1 = ["a", "b", "c", "a", "b", "c"];

// //const arr2 = ["a"];
// // const expected2 = ["a", "a"];

//  const arr3 = [];
// // const expected3 = [];

// function concatArrWithSelf(arr1) {
//     // code here
//     const array3 = arrayA2.concat(arrayB2);
    
//     console.log(array3);
    
//   }


//     const arrayA2 = [1, 2,3];
//     const arrayB2 = ['a', 'b'];
// concatArrWithSelf( arr1)



// part a 
// const arrA1 = ["a", "b"]
// const arrB1 = [1, 2, 3]
// const expected1 = ["a", "b", 1, 2, 3]

//  const arrA2 = [1, 2, 3]
//  const arrB2 = ["a", "b"]
// const expected2 = [1, 2, 3, "a", "b"]

function concat(arr1, arr2) {
  // set up new arra
  newarr=[];
  for (var i=0; i<arr1.length; i++){
             newarr.push(arr1[i]); 
      }     

  for(var j=0; j<arr2.length;j++){ 
            newarr.push(arr2[j]);    
     }   
    console.log(newarr);   
  } 

const arrA1 = ["a", "b"]
const arrB1 = [1, 2, 3]
concat(arrA1,arrB1);
