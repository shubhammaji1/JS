// Convert Arry to Object and Vice-Versa

const obj ={
    name:"Shubham",
    age:21,
    city:"Kulti"
}

let result = Object.entries(obj);
console.log(result.flat());

// Array to Object

let newObj = Object.fromEntries(result);
console.log(newObj);
