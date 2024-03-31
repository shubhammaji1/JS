function setusername(username){
    this.username = username
}

function createuser(username,email,password){
    setusername.call(this,username)
    this.email = email
    this.password = password

}

const user = new createuser("User01","user123@fb.com","12345")
console.log(user)