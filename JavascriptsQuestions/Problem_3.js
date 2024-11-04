// Count Occurrence of Charecter

//----Answer----//


const countChar =(word,char)=>{
    word = word.toLowerCase();
    char = char.toLowerCase();
    str = word.split("").reduce((accum, currChar)=>{
        if(currChar === char){
            accum++;
        }
        return accum;

    },0);
    console.log(str);
    

}
console.log(countChar("MissIssippi","I"));






