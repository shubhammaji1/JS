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


const res = Array.from({length:10},(v,i)=>i);
console.log(res);


const inArr =['1','2','3'].map(parseInt);
console.log(inArr);

//Next

var myObj = {
    foo: "Bar",
    func: function () {
        var self = this;
        console.log("outer"+this.foo);
        console.log("outer"+self.foo);
        (function(){
            console.log("inner"+this.foo);
            console.log("inner"+self.foo);
        }());
        
    }
};
myObj.func();
