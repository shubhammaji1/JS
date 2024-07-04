// Vowels 

const findVowels=(str)=>{
    let vowels =['a','e','i','o','u']
    let Arr= str.split('');

    let c=0;
    for(let char of Arr){
        if(vowels.includes(char.toLowerCase())){
            c++;
        }
    }
    console.log(str);
    return c;
    
}


console.log(findVowels("Hello World"));
console.log(findVowels("thE brOwen fOx"));
console.log(findVowels("brrppp"));


let arr = [[1,2],[0,5],[7,8]]
const Arr = arr.reduce((prev,curr)=> prev.concat(curr),[] );
console.log(Arr);
