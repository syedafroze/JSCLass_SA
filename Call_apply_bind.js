function getName(greet, age) {
  return this.name + " " + greet + age;
}

///bind

let user = {
  name: "Syham",
  id: 9,
};




console.log(getName.call("hello",34));

console.log(getName.apply(["hey",67]))


let binded = getName.bind(user);

binded("hi", 34);

binded("hey", 56);
