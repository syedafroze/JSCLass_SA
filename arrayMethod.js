//map
//         0 1 2 3 4
let arr = [2, 3, 1, 4, 5];

//[0,3,2,12,20];

let res = [];

for (i = 0; i < arr.length; i++) {
  res.push(arr[i] * i);
}
console.log(res);

/*
new array 
loop
push 
*/
let res2 = arr.map((afzal, shyam) => {
  return afzal * shyam;
});

let marks = [20, 30, 10, 45, 50]; //passing marks is 25

let result = [];
for (i = 0; i < marks.length; i++) {
  if (marks[i] >= 25) {
    result.push(marks[i]);
  }
}

//filter

let res3 = marks.filter((val) => val > 25);

/*
[30,45,50]

*/
console.log(result, res3);

//reduce

let arr4 = [2, 3, 4, 5, 6];

let sum = 0;

// for(i=0;i<arr4.length;i++){
//     sum=sum+arr4[i];
//     }

//     console.log(sum)

let sum2 = arr4.reduce((val1, val2) => {
  return val1 * val2;
});

/*

val1 2 val2 -3 => 5;
val1=5  val2 = 4   => 9
val1 = 9 val2 = 5 => 14 
val1 = 14 val2 = 6 => 20 

*/
console.log(sum2);

//forEach
//[pass,pass ,pass ]

let arr5 = [5, 3, 7, 9, 1, 3, 4, 5];

let res6 = [];

arr5.forEach((val, index, arr) => {
  if (val >= 5) {
    res6.push("pass");
  }
});

console.log(result2);

//[5,6,7,8,9]

// let res5 = arr5.filter((val,index,arr)=>{
//     if(val>=5){
//     return true;
// }
// })

let arr6 = ["afzal", "syed", "praveen", "syham", "praveen", "teja", "queen"];

//

let sorted = arr6.filter((val) => val[0] > "p");

console.log(sorted);
//map
//

/*
[5,6,7,8,9]

*/

//sunday

/*
array methods 



*/

//

/*
for loop(let i=0;i<n;i++) == for in (let i in arr)  == 
for (let i of arr) i is value 
forEach() = = for loop 
*/
