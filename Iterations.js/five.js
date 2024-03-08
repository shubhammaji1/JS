const coding =["C","C++","Java","Python","JS","Ruby"]
// coding.forEach( function (item){
//     console.log(item)
// }  )

// coding.forEach( (item)=>{
//     console.log(item)
// } )

// function print(item){
//     console.log(item);
// }
// coding.forEach(print)


// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr)
// } )

const myArr = [
    {
    langName : "JAVASCRIPT",
    langFile : "js"
},
    {
    langName : "PYTHON",
    langFile : "py"
},
    {
    langName : "JAVA",
    langFile : "java"
},
]
myArr.forEach( (item)=>{
    console.log(item.langName)
} )
