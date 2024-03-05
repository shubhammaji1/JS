function sayMyName(){
    console.log("S")
    console.log("M")
}
sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1+number2)
// }
function addTwoNumber(number1,number2){
    //    let result = number1+number2
    //     return result
    return number1 + number2
        
        }


const result = addTwoNumber(2,3)
// console.log(result);

function userlogged(username){
    if(!username){
        console.log("Enter user name");
        return
    }
    return`${username} just logged in`
} 
// console.log(userlogged("Shubham"))
// console.log(userlogged())

function calculate(val1,val2,...num1){
    return num1
}

// console.log(calculate(2,3,5,600,522))

const user ={
    name: "Shubham",
    roll: 121
}

function handleObjects(anyobject){
    console.log(`Name is ${anyobject.name} and rollNo is ${anyobject.roll}`)
}
// handleObjects(user)
