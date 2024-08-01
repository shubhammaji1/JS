// //nullish coaleshing operator(??)

// let myval=0;
// const myNumber = myval || 10;
// const myNumber2 = myval ?? 10;


// console.log(myNumber);
// console.log(myNumber2);

// // union and Intersection


// let arr1 =[1,2,3,4];
// let arr2 = [3,4,5,6];

// const Intersection=arr1.filter((curr)=>{
//     return arr2.includes(curr);

// });

// const Union = [...new Set([...arr1,...arr2])]; // Set is used to remove Duplicate Values

// console.log(Intersection);
// console.log(Union);

// // Remove Null and Undefined Values

// const obj ={
//     a:1,
//     b:null,
//     c:undefined,
//     d:'hii'
// };

// const newObj = Object.entries(obj).filter(([_,val])=>val!=null);

// console.log(newObj);

// //loggedNumbers

// const loggedNumbers =()=>{
//     console.log(1);
//     setTimeout(() => {
//         console.log(2)
//     }, 1000);
//     setTimeout(() => {
//         console.log(3)
//     }, 0);
//     console.log(4)
// };

// loggedNumbers();

// // Asynsc 
// function Call(){
//     return new Promise(()=>{
//         setTimeout(() => {
//             console.log("Hello");
//         }, 3000);
//     });
// }

// async function asynccall(){
//     console.log("Hii")
//     const result = await Call();
//     console.log(result);
// }

// asynccall();


//

const a ={};
const b ={key: "b"};
const c = {key: "c"};

a[b] = 123;
a[c] = 456;

console.log(a[b]);





