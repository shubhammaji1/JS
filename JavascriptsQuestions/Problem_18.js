//isEmptyObject

const isEmptyObject=(obj)=>{
    // for(let key in obj){
    //     if(obj.hasOwnProperty(key)){
    //         return `It's Not Empty`;
    //     }
    // }
    // return `It's Empty`;

    return Object.keys(obj).length != 0; 
}


console.log(isEmptyObject({name:"Shubham"}))
console.log(isEmptyObject({}))
console.log(isEmptyObject({keyWithNull:null}))
console.log(isEmptyObject({keyWithUndefined:undefined}))