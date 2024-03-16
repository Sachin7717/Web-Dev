let a = prompt("Enter the first number");
let b = prompt("Enter the second number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry, you can't do this. Mistake in input.");
}

let sum = parseFloat(a) + parseFloat(b);
function main() {
    let x=5;
    try {
        console.log('The sum is', sum*x);
        return true;
    } catch (error) {
        console.log('error aa rha h');
        return false;
        
    }
    finally{
        console.log('code is executed fully');
        
    }
    
}
let c= main();
console.log(c);



