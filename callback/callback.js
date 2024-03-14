console.log("script is initializing")
console.log("my name is sachin");

setTimeout(() => {
    console.log("i am settimeout")
}, 1000);
console.log("hello");

const callback = (arg) => {
    console.log(arg);

}


const loadscript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Sachin");
    document.head.append(sc);

}
loadscript(callback);
