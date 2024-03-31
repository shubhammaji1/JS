let myheroes = ["thor", "spiderman"];

let heropower = {
  thor: "hammer",
  spiderman: "spider",

  getspiderpower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.shubham = function () {
  console.log(`Shubham is everywhere`);
};
heropower.shubham();
myheroes.shubham();


//Inheritance 


const user={
    username: "ABC",
    gmail: "abcd@gmail.com"
}
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__ : TeachingSupport
};

Teacher.__proto__ = user

//Mordern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anothername = "Shubham  "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)
}
anothername.truelength()
"Abc  ".truelength()