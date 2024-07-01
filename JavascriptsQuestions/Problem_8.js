// Remove Duplicate Elments

const removeDuplicate =(arr)=>{
    let newArr = [...new Set(arr)];
    return newArr;

}

console.log(removeDuplicate([1,2,3,1,4,3,2]));
console.log(removeDuplicate([1,2,3,4]));
console.log(removeDuplicate([-1,-2,-3,-1,-4,-2]));
console.log(removeDuplicate([]));
