
        // Array of jokes
        const jokes = [
            "Why don't scientists trust atoms? Because they make up everything!",
            "Parallel lines have so much in common. It’s a shame they’ll never meet.",
            "I told my wife she was drawing her eyebrows too high. She looked surprised.",
            "I'm reading a book on anti-gravity. It's impossible to put down!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "What do you call fake spaghetti? An impasta!",
            "Why don't skeletons fight each other? They don't have the guts."
        ];

        // Function to generate a random joke
        function generateJoke() {
            const randomIndex = Math.floor(Math.random() * jokes.length);
            return jokes[randomIndex];
        }

        // Display a random joke when the page loads
        document.addEventListener('DOMContentLoaded', function() {
            const jokeElement = document.getElementById('joke');
            jokeElement.textContent = generateJoke();
        });

        // Button event listener to generate a new joke
        const button = document.getElementById('newJokeButton');
        button.addEventListener('click', function() {
            const jokeElement = document.getElementById('joke');
            jokeElement.textContent = generateJoke();
        });
    