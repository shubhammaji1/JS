// Remove Duplicates

const removeDuplicate=(arr)=>[...new Set(arr)] 


console.log(removeDuplicate([1,2,3,5,4,5,2,4]));
console.log(removeDuplicate(["a","b","c","c","a","b"]));