// Longest Word in the String

//-----Answer----//

const findLongestWord =(str)=>{
    if(str.trim().length === 0){
        return false;
    }

    StrArr = str.split(" ");
    StrArr = StrArr.sort((a,b)=>b.length-a.length);
    console.log(StrArr);
    return StrArr.at(0);
}


console.log(
    findLongestWord("Hi, this is Shubham here")
);


