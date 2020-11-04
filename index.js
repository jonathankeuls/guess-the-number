
//1
const secretNumber = randomInt()

function randomInt() {
    return Math.floor(Math.random()*100)
}

console.log(secretNumber)
console.log(secretNumber)
console.log(secretNumber)
console.log(secretNumber)
console.log(secretNumber)


//2
function getUserGuess() {  
    const userInput = document.getElementById('user-input').value
     return parseInt(userInput, 10)
}



//3
document.addEventListener('keyup', function(event){
    if (event.key === 'Enter') {
        const userGuess = getUserGuess()
        console.log(userGuess)
        if (userGuess < secretNumber) {
            setMessage('Too low!')
        } else if (userGuess > secretNumber) {
            setMessage('Too big!')
        } else if (userGuess === secretNumber) {
            setMessage('You are correct!')
        }
    }
})

//4
function setMessage(msg) {
    document.getElementById('message').innerText = msg
}









