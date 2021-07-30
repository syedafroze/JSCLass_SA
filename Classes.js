

// let user1 = {
//   name: "afzal",
//   id: 9,
// };

// let user2 = {
//   name: "syed",
//   id: 8,
// };

// let user3 = {
//   name: "shyam",
//   id: 2,
// };

function Users(name, id) {
  return {
    name: name,
    id: id,
  };
} //factory functions

function Users(name, id) {
  this.name = name;
  this.id = id;
}
//constructor



console.log(this); //global object window

let user5 = Users("sana", 9);

let user6 = new Users("vikas", 8);

console.log(user5, user6);

// let user1 = Users("syed",9)

// let user2 =Users("Afzal",8)

// let user3 = Users("Shyam",2)

// console.log(user1,user2,user3)

//------------------------------ Class ------------------------------

class Addr {
  constructor(city) {
    this.city = city;
  }
  getName() {
    return this.city;
  }
}

//class inheritance

class Users extends Addr {
  constructor(name, id, city) {
    super(city); //calls parent class constructor
    this.name = name;
    this.id = id;
    //private ,public, protectetd //
  }
}

//class - its a blue print of object being created

let user5 = new Users("sana", 9, "Hyd");

let user6 = new Users("vikas", 8, "Noida");

console.log(user5.getName(), user6);

// let user1 = Users("syed",9)

// let user2 =Users("Afzal",8)

// let user3 = Users("Shyam",2)

// console.log(user1,user2,user3)
