// document.getElementById('owl').onclick = function(){
//     alert("Owl Clicked")
// }

// event Propagation (1.Event Bubling        2.Event Capturing )


// document.getElementById('images').addEventListener('click',function(e){
//  console.log("image clicked")
// },false)
// document.getElementById('owl').addEventListener('click',function(e){
//  console.log("Owl clicked");
//  e.stopPropagation();
// },false)

// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google is clicked");
// })

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target)
    if(e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode
         removeIt.remove();
    }
    // let removeIt = e.target.parentNode
    // removeIt.remove();
    // removeIt.parentNode.removeChild(removeIt)
},false)

