// Define the function to be executed
function logTime() {
    console.log(`Current time is ${new Date().toLocaleTimeString()}`);
}

// Call setInterval
const intervalId1 = setInterval(logTime, 1000); // Executes logTime every 1000 milliseconds (1 second)

// To stop the interval after a certain number of executions (e.g., 5 seconds), you can use a timer
const maxTime = 5000;
let elapsedTime = 0;

const intervalId2 = setInterval(() => {
    console.log(`Current time is ${new Date().toLocaleTimeString()}`);
    elapsedTime += 1000;

    if (elapsedTime === maxTime) {
        clearInterval(intervalId2); // Stops the interval
    }
}, 1000);
