/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/
let random=Math.random()
console.log(random)
let a=prompt("enter first number")
let c=prompt("enter operator number")
let b=prompt("enter second number")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",

}

if (random>0.1) {
    //right calcilation
    console.log("the result is ${a} ${c} ${b} ")
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
    
}
else{
    // perform wrong calculation
    c=obj[c]
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}
