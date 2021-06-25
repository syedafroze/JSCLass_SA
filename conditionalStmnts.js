/*
if , else , else if
switch case 
ternarary operator 

*/

//num==5 or num==7

//calculator

let num = 15,
  num2 = 6,
  opr = "*";
// 5 + 6 operands +(operator)
if (opr == "+" || opr == "%") {
  console.log(num + num2);
} else if (opr == "-") {
  console.log(num - num2);
} else if (opr == "*") {
  console.log(num * num2);
} else if (opr == "/") {
  console.log(num / num2);
} else {
  console.log("invalid opration");
}

switch (opr) {
  case "+":
    console.log(num + num2);
    break;
  case "-":
    console.log(num - num2);
    break;
  case "*":
    console.log(num * num2); //30
    break;
  case "/":
    console.log(num / num2);
    break;
  default:
    console.log("invalid operation");
}

//ternarary operator

if (num == 5) {
  console.log("its 5");
} else {
  console.log("its not 5");
}

//synatx (condition)?(true):(false)

num != 5 || num < 10 ? console.log("its 5") : console.log("its not 5");

//if a number is divisible by 5 then print zig else if number is divisible by
//3 then print zag else if it is divisible by both 3 and 5 then print zig zag

if (num % 5 == 0) {
  console.log("zig");
} else if (num % 3 == 0) {
  console.log("zag");
} else if (num % 5 == 0 && num % 3 == 0) {
  console.log("zigzag");
}


//num=15 


//