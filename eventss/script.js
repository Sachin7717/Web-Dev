console.log("script is initializing");
let button=document.getElementById("btn")

function sayhi(){
    alert("hii")
}

button.addEventListener("click",()=>{
    alert("button is clicked")
})
button.addEventListener("pointerleave",sayhi)