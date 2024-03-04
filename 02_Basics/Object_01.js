const tinder = new Object(); // singleton Object
tinder.id ="abc123"
tinder.mail ="rust@google.com"
tinder.loggedIn = false

const newApp = {
    email:"abc@gmail.com",
    fullname: {
        userFullName:{
            userId:123,
            FullName: "Shubham Maji"
        }
    }
}
// console.log(newApp)

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}

//  const Comb = Object.assign({},obj1,obj2);
const Comb = {...obj1,...obj2}
 console.log(Comb);

 const user =[
    {
        id:1,
        email:"abcgmail.com"
    },
    {
        id:1,
        email:"abcgmail.com"
     }
 ]

//  console.log(user[1].email);

// console.log(Object.keys(tinder))
// console.log(Object.entries(tinder))
// console.log(tinder.hasOwnProperty('loggedIn'))

const course ={
    courseName : "Java",
    coursePrice: 999,
    cousreTutor:"Tom"
}

const {cousreTutor:Tutor} = course
console.log(Tutor);

// {
//     "name" : "Shubho",
//     "cousre": "Java",
//     "price": "free"
// }

[
    
]