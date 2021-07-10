//function - code reusability 

//          
let scores = [4,3,2,1];



// function Average(marks){

//     let sum=0;

//     for(i=0;i<marks.length;i++){
//     sum = sum+marks[i];
//     }
    
//     let res = sum/ marks.length ;
//     return res;
// }

// let result = Average(scores);

// console.log(result);

//create a function which returns sum of the values of array passed to it 
function Sum(num1,num2){
    
      return num1+num2;
        
}
//function call
console.log(Sum(5,10))

//function Expression
let Sum2 = function(num1,num2){
   return num1+num2;
}
//Anonymous - A function that doesnt have name is called Anonymous function 
console.log(Sum2(3,4));

//Arrow function
function Square2(num){
    return num*num;
}
let Square = num1 => num1*num1;

console.log(Square(2));




