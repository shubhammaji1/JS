// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encriptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const user1 = new User("User001","user001@gmail.com","123")

// console.log(user1.encriptPassword());
// console.log(user1.changeUserName());

//Behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encriptPassword = function(){
     return `${this.password}abc`
}
const user1 = new User("User001","user001@gmail.com","123")

console.log(user1.encriptPassword());

