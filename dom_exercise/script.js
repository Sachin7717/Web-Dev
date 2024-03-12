console.log("script is intializing");

let boxes=document.querySelectorAll(".box");

function getRandomcolor()
 {
    let val1 = Math.ceil(0 + Math.random()*255)
    let val2 = Math.ceil(0 + Math.random()*255)
    let val3 = Math.ceil(0 + Math.random()*255)
    let color =`rgb(${val1}, ${val2}, ${val3})`
    return color;
    
}
console.log(getRandomcolor())

boxes.forEach(element => {
    element.style.backgroundColor=getRandomcolor();
});