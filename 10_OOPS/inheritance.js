class user {
  constructor(username) {
    this.username = username;
  }
  logMe(){
    console.log(`username is ${this.username}`)
  }
}

class Teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const user1 = new Teacher("User001","User@fb.in","12356")

// user1.addCourse();
const user2 = new user("User002")
user2.logMe();
user1.logMe();
