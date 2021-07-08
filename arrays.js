//arrays 

//creation of  array 


//array literal 

let arr = [];


//array constructor 

let arr2 = new Array();

//how toinsert the values in array 

//push ->adds elemnts to the last index
arr.push(1,2,3);
console.log(arr);

//pop() ->removes elemnts from last index 
arr.pop();
console.log(arr);

//unshift - add elemnt to the first index 
arr.unshift(0);
console.log(arr);

//shift - >removes elemnet fromfirst index
arr.shift();
console.log(arr);
arr.push(3,4,3)
console.log(arr);
//splice -> removes or adds elemnts at any index of array 
//arrayName.splice(startIndex, no of elements to be removed , elements to be added )

let index =arr.findIndex((val)=>val==3);

console.log(index);//3

let spliced =arr.splice(index,1,6,10);

console.log(arr,spliced);


//slice -> arrayName.slice(startIndex,endIndex+1)

let sliced = arr.slice(1,4);
console.log(sliced);

let arr3 = [3,4,5,2,22,31,45,20];

//sort() ->alphabitcal order  
//
console.log(arr3.sort((shyam,Afzal)=>shyam-Afzal));


//reverse()

console.log(arr3.reverse())

//functions
/*
regular
recursive 
callback
hof
iife



currying


*/
//map, filter , forEach ,reduce,


//         0 1 2 3
let arr4=  [2,3,1,4]
// [0,3,2,12]

let res =[];
for(i=0;i<arr4.length;i++){
    res.push(arr4[i]*i);
}
console.log(res);

//map
/*
[]
loop
mul
push
*/


let result2 = arr4.map(function(value,index,arr4){ return value * index })

let result3 = arr4.map((value,index,arr4)=> value * index )
//[0,3,2,12]




console.log(result3)







