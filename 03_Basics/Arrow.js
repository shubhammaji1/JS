const user={
    username:"Shubham",
    price : 990,

    welcomemessage: function(){
        // console.log(`${this.username},welcome`)
        // console.log(this);
    }
}

// user.welcomemessage()
// console.log(this);

// function chai(){
//     console.log(this);
// }
// chai()

// const chai = function(){
//     const username = "shubham"
//         console.log(this.username);
// }
// chai()

const chai = () => {
        const username = "shubham"
                console.log(this);
}
chai()

// const sum =(num1,num2)=> num1+num2
// const sum =(num1,num2)=> (num1+num2)
const sum =(num1,num2)=> ({user:"Shubham"})
console.log(sum(2,3))