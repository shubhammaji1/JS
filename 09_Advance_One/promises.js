// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task complete");
//     resolve();
//   }, 1000);
// }).then(function(){
//     console.log("Consumed2");
// })

// const promiseTwo = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "Shubho",email:"abc.com"})
//     },1000)
// })

// promiseTwo.then(function(user){
//     console.log(user)
// })

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Shubho", email: "def.com" });
//     } else {
//       reject("Error");
//     }
//   }, 1000);
// });

// promiseThree
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finnaly");
//   });

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JS", password : "123"});
    } else {
      reject("Error of JS");
    }
  }, 1000);
});

async function consumePromiseFive(){
    try {
        const res = await promiseFour
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()
