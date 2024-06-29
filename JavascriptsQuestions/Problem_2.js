// HashTag generator

//---Answer---//

const generateHash=(str)=>{
    if(str.length >280 || str.trim().length === 0){
        return false;
    }
    str = str.split(" ");
    str = str.map((currEle) =>
        currEle.charAt(0).toUpperCase() + currEle.slice(1));
    
    str=`#${str.join("")}`;
    console.log(str);
    return str;
};


console.log(
    generateHash("My name is Shubham ")
);