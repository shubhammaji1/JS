// Sum of its Digit
let c =0;
const Sum =(num)=>{
    let arr = Array.from(String(num),Number);

    return arr.reduce((accu,curr)=>accu += curr,0)
}


console.log(Sum(1234));
console.log(Sum(62345));
console.log(Sum(9034678));