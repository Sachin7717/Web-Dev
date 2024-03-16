let a = prompt("Enter the first number");
let b = prompt("Enter the second number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry, you can't do this. Mistake in input.");
}

let sum = parseFloat(a) + parseFloat(b);
console.log('The sum is', sum);
