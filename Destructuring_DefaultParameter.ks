function Add(a=0,b=2,c=0){
console.log(a+b+c);
}



Add(2,3); //  {} empty object

let user = {name:"syed",id:9,city:"hyd",age:56}



let {name,age,city} = user ;//destructuring 
console.log(name,age,city)