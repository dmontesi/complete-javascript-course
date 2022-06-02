'use strict';

console.log(document.querySelector('.message').textContent);

// 72. Selecting and Manipulating Elements

// Manipulating the content by classes
// document.querySelector('.message').textContent = 'Something else 😎'
// console.log(document.querySelector('.message').textContent);

// const magicNumber = document.querySelector('.number').textContent = 27
// document.querySelector('.score').textContent = 10

// // Selecting and modifying values in an input
// document.querySelector('.guess').value = 13

// // 73. Handling Click Events
// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(document.querySelector('.guess').value)
//     console.log(guess, typeof guess)

//     if(!guess) {
//         document.querySelector('.message').textContent = 'Please enter a value ⛔️'
//     } else if (guess === magicNumber) {
//         document.querySelector('.message').textContent = 'Cool, you got it 😎'
//     } else {
//         document.querySelector('.message').textContent = 'Try again 😫'
//     }
// })

// 74. Implementing the Game Logic
// We need to define the secret number outside the function, otherwise the everytime we click on the button, it will guess a new number

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// 77. Implementing Highscores (Combining with #74)
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    // When there is no input
    if(!guess) {
        displayMessage('⛔️ Please enter a value')
    } 
    
    // When player wins
    else if (guess === secretNumber) {
        // display winning message
        displayMessage('😎 Cool, you got it!!')
        // display secret number
        document.querySelector('.number').textContent = secretNumber;
        // styles
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        // highscore
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }

    // 78. Refactoring Our Code: The DRY Principle
    // When guess is wrong 
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '😫 Too high. Try again' : '😫 Too low. Try again')
            score--;
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('😪Too many wrongs. You lost the game.') 
            document.querySelector('.score').textContent = 0
        }
    }
    
    // // When is too low
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '😫 Too low. Try again'
    //         score--;
    //         document.querySelector('.score').textContent = score
    //     } else {
    //         document.querySelector('.message').textContent = '😪Too many wrongs. You lost the game.'
    //         document.querySelector('.score').textContent = 0
    //     }
        
    // // When is too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '😫 Too high. Try again'
    //         score--;
    //         document.querySelector('.score').textContent = score
    //     } else {
    //         document.querySelector('.message').textContent = '😪Too many wrongs. You lost the game.'
    //         document.querySelector('.score').textContent = 0
    //     }
    // }
})

/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK
*/ 

// 1. select Again class and add event handler
document.querySelector('.again').addEventListener('click', () => {
    // 2. Restore initial values
    score = 20
    document.querySelector('.score').textContent = score

    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.number').textContent = '?'

    // 3. Restore the initial conditions of the message and guess input fields
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.guess').value = ''

    // 4. Restore styles
    document.querySelector('body').removeAttribute('style')
    document.querySelector('.number').removeAttribute('style')
})





