const user={
    username : "Shubham",
    loginCount : 8,
    signed: true,
    getDetails: function(){
        // console.log("Got the details")
        // console.log(`username : ${this.username}`)
        // console.log(this);
    }
}

// console.log(user.username)
// console.log(user.getDetails())
// console.log(this);

function User(username,count,isLoggedIn){
    this.username = username
    this.count = count
    this.isLoggedIn = isLoggedIn

    // return this
}

const userone =  User("Shubham",12,true)
const usertwo =  User("Shubho",8,false)
// console.log(userone.constructor);
console.log(usertwo)