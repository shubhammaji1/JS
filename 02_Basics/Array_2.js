const Mheros = ["Thor","Iron-Man", "Spiderman"]
const Dheros = ["Superman","Flash", "Batman"]

// Mheros.push(Dheros)
// console.log(Mheros)
// const heros = Mheros.concat(Dheros);
// console.log(heros);

// Spread Concept
const All_heros = [...Mheros,...Dheros]
console.log(All_heros)

const NewAr = [1,2,3,[4,5],6,7,[8,9,[0,2]]]

const Flatarray = NewAr.flat(Infinity)
console.log(Flatarray)
console.log(Array.isArray("Shubham"));
console.log(Array.from("Shubham"));
console.log(Array.from({name:"Shubham"}));//Important(we should have tell key or value)
let score1 =10;
let score2 =20;
let score3 =30;
console.log(Array.of(score1,score2,score3))