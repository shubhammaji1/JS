//Javascript Execution Context
// 1) Global Ex Co
// 2) Functions Ex Co
// 3) Eval Ex Co

function one(){
    console.log("One");
    two();
}
function two(){
        console.log("Two");
        three();
}
function three(){
        console.log("Three");
}

one()
two()
three()