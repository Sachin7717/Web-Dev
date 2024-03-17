let [x,y, ...rest]= [4,5,6,7,8,9]
console.log(x,y,rest);

let obj ={
    a:3,
    b:4,
    c:6
}

let {a,b}=obj
console.log(a,b);

function sum(a,b,c) {
    return a+b+c;
}
let arr = [1,2,3]
//simple approaach
console.log(arr[0]+arr[1]+arr[2]);

//function approach
console.log(sum(...arr));
