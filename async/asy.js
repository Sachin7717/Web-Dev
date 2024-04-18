// Function to fetch data asynchronously
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        const data = await response.json(); 
        
        return data; 
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
}
async function fetchDataExample() {
    try {
        console.log('Fetching data...');
        const data = await fetchData(); 
        
        console.log('Fetched data:', data);
        
    } catch (error) {
        console.error('Error during data fetching:', error);
    }
}


fetchDataExample();
