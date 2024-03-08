const num = [1,2,3,4,5]

// const mynum = num.reduce(function(acc, curr){
//         return acc+curr
// },0)
// console.log(mynum);

// const mynum = num.reduce((acc ,curr) => acc + curr,0)
// console.log(mynum);

const Shopping =[
    {
        Course : "JS",
        Price : 2999
    },
    {
        Course : "PY",
        Price : 3999
    },
    {
        Course : "C",
        Price : 4999
    }
]

console.log(Shopping.reduce((acc,item)=>acc + item.Price,0))