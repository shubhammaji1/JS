const myNum =[1,2,3,4,5,6,7,8,9,10]

// let newNum = myNum.map((num)=>{
//     return num+10
// })
        
//  newNum = myNum.map((num)=>
//          num+20
//          )

// console.log(newNum);

//******************** CHAINING ************************

const newNum = myNum
                    .map((num)=> num*10)
                    .map((num)=>num+1)
                    .filter((num)=> num>40)
                    
console.log(newNum);