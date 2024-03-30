const rand = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i =0;i<6;i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intv;
const startChang = function(){
    if(!intv){
        intv = setInterval(changebg,1000)
    }
    function changebg(){
        document.body.style.backgroundColor = rand();
    }
    
};
const stopChang = function(){
    clearInterval(intv)
    intv = null;
};

document.querySelector('#start').addEventListener('click',startChang)
document.querySelector('#stop').addEventListener('click',stopChang)