const prompt = require('prompt-sync')();

const randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber);

const num = prompt("Enter a number");

if(randomNumber == num){
    console.log("Matched");
}else if(randomNumber > num){
    console.log(" Guess is  Low");
}else{
    console.log("Guess is high");
}