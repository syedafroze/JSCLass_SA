let color = "white";
let model = "2000";
let Name = "Civic";

//Object - its a datat structure where u store data in form on key values pairs / properties and values)

//Object -

let Car = {
  Color: "white",
  Model: "2000",
  Name: "Civic",
};

//creation of object
//object literal
let obj2 = {};

//creating object using contructor method
let obj3 = new Object();

//how to add property in a object
let obj = {};
obj.name = "Dell_G3";

console.log(obj);

//accesing values from object

console.log(Car.Name);

let user = {
  name: "syed",
  id: 9,
  country: "India",
};

// [ [name,"syed"] ,[id,"9"] ,[country,"India"] ]

//for in
let res = [];
for (i in user) {
  res.push([i, user[i]]);
}
console.log(res);

//Object.entries

console.log(Object.entries(user));

//[name,id,country]

//Object.keys()

console.log(Object.keys(user));

//Object.values

console.log(Object.values(user));

let emp = [
  { name: "syed", id: 9, adr: { city: "hyd", state: "Tel" } },
  { name: "Afzal", id: 19, adr: { city: "Noida", state: "Del" } },
  { name: "Shyam", id: 29, adr: { city: "hyd", state: "Tel" } },
];
let res2 = [];
for (user of emp) {
  if (user.adr.state == "Tel") {
    res2.push(user); //
  }
}
console.log(res2);
//[{ name: "syed", id: 9, adr: { city: "hyd", state: "Tel" } }, { name: "Shyam", id: 29, adr: { city: "hyd", state: "Tel" } }]

let res3 = emp.filter((user) => user.adr.state == "Tel");
console.log(res3);

//{}
let emp2 = { name: "syed", id: 9 };
let adrr = { city: "hyd", state: "Delhi" };

Object.assign(emp2, adrr);
console.log(emp2);

/*
Object.keys
Object.values
Object.entries
Object.assign
for in 

*/
