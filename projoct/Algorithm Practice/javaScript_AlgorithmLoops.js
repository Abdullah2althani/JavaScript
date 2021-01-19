//  Predict_1 Print odds 1-20
//  expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
for (var num = 0; num < 20; num++) {
  if(num % 2 != 0)
  console.log(num);
}

//  Predict_2 Sum and Print 1-5
//  expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15
var sum = 0
for (var i = 1; i <= 5; i ++) {
    sum += i
    console.log(sum);
}

