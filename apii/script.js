document.addEventListener('DOMContentLoaded', function() {
    const usersList = document.getElementById('users-list');

    // Fetch users from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                usersList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Failed to load users';
            document.body.appendChild(errorMessage);
        });
});
