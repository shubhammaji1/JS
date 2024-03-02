//stack(primitive) Heap(Non Primitive)

let myFun = "Shubham"

let anothername = myFun
anothername = "codemee"

console.log(myFun);
console.log(anothername);

let user1 ={
    email: "abc@gmail.com",
    upi: "123@pay"
}

let user2 = user1;

user2.email = "def@gmail.com";

console.log(user1);
console.log(user2);