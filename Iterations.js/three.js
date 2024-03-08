//for of

const arr = [1,2,3,6,5,4]
for (const val of arr) {
    // console.log(val);
}

// Map
const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATE OF AMERICA")
map.set('FR',"FRANCE")

// console.log(map);
for (const [key,value] of map) {
    // console.log(key,":-",value);
}

const myObj ={
    'name':"Shubham",
    'roll':121,
    'Email' : "abc@gmail.com"
}

// for (const [key,value] of myObj) {
    // console.log(i)
// }

const arr1 =["A","B","C","D","E"]

for (const key of arr1) {
    console.log(key);
    }
