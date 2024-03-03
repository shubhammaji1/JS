let mydate = new Date();

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());

// let newDate = new Date(2023,0,13);
// console.log(newDate.toDateString());
// let newDate = new Date(2023,0,13,15,8,5,7);
// let newDate = new Date("2023-01-13");
// console.log(newDate.toLocaleString());

// let myTimeStamp = Date.now();

// console.log(myTimeStamp)
// console.log(newDate.getTime())

// console.log(Math.floor(Date.now()/1000))
let DateNew = new Date();
console.log(DateNew);

let Dt = DateNew.toLocaleString('default',{
    weekday: "narrow",
    day: "numeric" 
})

console.log(Dt);