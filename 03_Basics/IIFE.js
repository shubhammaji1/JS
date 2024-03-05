//Immediately Invoke Function Expression(to remove global scope pollution)

(function chai(){ // Name iife
    console.log("DB CONNECTED");
})();

((name)=>{
        console.log(`DB CONNECTED TWO ${name}`);
})("shubham")