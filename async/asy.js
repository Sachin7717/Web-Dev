// Function to fetch data asynchronously
async function fetchData() {
    try {
        // Using fetch to make an HTTP request (assumes running in a browser or with a polyfill like node-fetch in Node.js)
        const response = await fetch('https://api.example.com/data');
        
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        const data = await response.json(); // Parse response body as JSON
        
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error for handling elsewhere
    }
}

// Example usage of the fetchData function within an async context
async function fetchDataExample() {
    try {
        console.log('Fetching data...');
        const data = await fetchData(); // Wait for fetchData to complete
        
        // Data is now available here
        console.log('Fetched data:', data);
        
        // Perform further operations with the fetched data
        // For example, update UI or call another function with the data
    } catch (error) {
        // Handle any errors that occurred during fetching or data processing
        console.error('Error during data fetching:', error);
    }
}

// Call the fetchDataExample function
fetchDataExample();
