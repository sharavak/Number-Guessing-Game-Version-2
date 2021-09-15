let userInput = document.querySelector('input')
let noOfGuess = document.querySelectorAll('span')[1]
let hints = document.querySelector('p')
let previousNum=document.getElementById('hist')
const playAgain = document.getElementById('playAg')
const reveal = document.querySelectorAll('button')[1]
const remark = document.querySelector('h4')
const ans=document.querySelector('h5')

let number = Math.floor(Math.random() * 50) + 1
console.log(number)
let userValue = 0
let guess = 0
userInput.addEventListener('keydown', function (e) {
        console.log(e)
        switch (e.key) {
            case 'Enter':
                userValue = parseInt(userInput.value)
                if (isNaN(userValue) === true) {
                    alert('Hey! Only Numbers Allowed')
                    userInput.value = ''
                }
                else {
                    hints.style.animation='rem 6s ease-in-out infinite'
                    if (userValue === number) {
                        guess += 1
                        hints.style.animation='won 5s infinite ease-in-out'
                        hints.textContent = `You Won!`
                        noOfGuess.textContent = guess
                        previousNum.textContent = userValue
                        userInput.value = ''
                        remarks(guess)
                    }
                    else if (userValue + 2 === number || userValue + 1 === number) {
                        guess += 1
                        hints.textContent = 'You are Too close!'
                        noOfGuess.textContent = guess
                        previousNum.textContent = userValue
                        userInput.value = ''

                    }
                    else if (userValue - 2 === number || userValue - 1 === number) {
                        guess += 1
                        hints.textContent = 'You are Too close!'
                        noOfGuess.textContent = guess
                        previousNum.textContent = userValue
                        userInput.value = ''

                    }
                    else if (userValue > number) {
                        guess += 1
                        hints.textContent = 'You are Too High!'
                        noOfGuess.textContent = guess
                        previousNum.textContent = userValue
                        userInput.value = ''

                    }
                    else if (userValue < number) {
                        guess += 1
                        hints.textContent = 'You are Too Low!'
                        noOfGuess.textContent = guess
                        previousNum.textContent = userValue
                        userInput.value = ''
                    }
                }
                break;
            case ' ':
                alert('Hey! Please Only Numbers')
                userInput.value=''
                
        }
    })


reveal.addEventListener('click', function () {
    if (guess === 0) {
        alert('Hey! Please Try atleast one time.You will be Enjoying')
    }
    else {
        reveal.textContent = 'Revealed!'
        reveal.style.backgroundColor = '#1bff74'
        reveal.style.color = 'black'
        reveal.style.fontSize='1.5rem'
        reveal.style.transition='5s background-color,4s font-size ease-in'
        reveal.disabled = false;
        reveal.style.cursor='no-drop'
        ans.style.animation='res 4s ease-in-out forwards'
        ans.textContent = `The Answer is ${number}.Better Luck Next Time!`
        hints.style.animation=''
    }
})

playAgain.addEventListener('click', function () {
    number = Math.floor(Math.random() * 50) + 1
    console.log(number)
    guess=0
    remark.textContent = ''
    noOfGuess.textContent = ''
    previousNum.textContent = ''
    reveal.textContent = 'Reveal'
    reveal.style.backgroundColor = ''
    reveal.style.color = ''
    reveal.style.fontSize=''
    ans.textContent = ''
    hints.textContent = ''
    hints.style.animation = ''
    ans.style.animation = ''
    reveal.disabled = true;
    reveal.style.cursor='pointer'


})

function remarks(guess) {
    if (guess === 1) {
        remark.textContent='You Guessed the number in One Guess. Excellent!'
    }
    else if (guess >= 2 && guess <= 4) {
        remark.textContent=`You Guessed the number in ${guess} Guess. Very Good!`
        
    }
    else if (guess >=5 && guess <= 7) {
        remark.textContent=`You Guessed the number in ${guess} Guess. Good!`
        
    }
    else if (guess >=8 && guess <= 10) {
        remark.textContent=`You Guessed the number in ${guess} Guess. Better!`
    }
    else if (guess >=11 && guess <= 15) {
        remark.textContent=`You Guessed the number in ${guess} Guess. Could be Better!`
        
    }
    else {
        remark.textContent=`You Guessed the number in ${guess} Guess. Please Try again!`

    }

}