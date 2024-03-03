
const mySym = Symbol("Key1")
const jsUser ={
    name: "Shubham",
    "Full Name": "Shubham Maji",
    [mySym]:"mykey1",
    age:21,
    Location:"DGP",
    Email:"abc@gmail.com"
}

// console.log(jsUser.Email)
// console.log(jsUser["Email"])
// console.log(jsUser["Full Name"])
// console.log(jsUser.Full Name)
// console.log(jsUser[mySym])
// console.log(typeof mySym)

jsUser.Email ="abcd@google.com"
// Object.freeze(jsUser)
jsUser.Email ="abcd@chatai.com"
// console.log(jsUser);
jsUser.greetings = function(){
    console.log(`Hii, Good Evening,${this["Full Name"]}`);
}

console.log(jsUser.greetings())

