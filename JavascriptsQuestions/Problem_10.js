// sum of Squares

const sumofSquares =(arr)=>{
    return arr.reduce((accum,currElem) => (accum += currElem*currElem),0)
    
};

console.log(sumofSquares([1,2,3,-9]));