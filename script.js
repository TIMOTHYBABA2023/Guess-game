let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 3;

document.getElementById('attempts').innerText = `Attempts left: ${attempts}`;

function makeGuess() {
    let guessInput = document.getElementById('guessInput').value;
    let message = '';

    if (!/^\d+$/.test(guessInput) || guessInput < 1 || guessInput > 100) {
        message = 'Please enter a valid number between 1 and 100.';
    } else {
        let guess = parseInt(guessInput);
        attempts--;

        if (guess === randomNumber) {
            message = `Congratulations! You guessed the number ${randomNumber} correctly!`;
            attempts = 0;
        } else if (guess < randomNumber) {
            message = 'Too low!';
        } else if (guess > randomNumber) {
            message = 'Too high!';
        }

        if (attempts === 0 && guess !== randomNumber) {
            message += ` You've used all attempts. The number was ${randomNumber}.`;
        }

        document.getElementById('attempts').innerText = `Attempts left: ${attempts}`;
    }

    document.getElementById('message').innerText = message;

    if (attempts === 0) {
        document.getElementById('guessInput').disabled = true;
        document.querySelector('button').disabled = true;
    }
}
