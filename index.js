//Cards initialization
let firstCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)
let secondCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)
// html card element definition
let cards = document.getElementById("cards-el")
//html sum element definition
let sumEl = document.getElementById("sum-el")
//html sum element definition
let messageEl = document.getElementById("messages-el")
//html element for the buttons container
let btnContainer = document.getElementById("btn-container")
//html start button element definition
let start = document.getElementById("btn-start")
//html start button element definition
let btnnewcard = document.getElementById("btn-newcard")
// Sum of the first two cards
let sum = firstCard + secondCard
// Boleean value to know if the player wins!
let hasBlackJack = false
// Boleean value to know if the player is still alive and can keep playing
let isAlive = true
// Initialization of the message for wining, losing & draw a new card
let message = ""
// Function that serves a new card for the player
function newCard(){
    sumnewCard()
}

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function startGame(){

    cards.textContent +=" "+firstCard+" - "+ secondCard
    sum = firstCard + secondCard
    sumEl.textContent += sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
        messageEl.textContent = message
        start.style.visibility = "hidden"
        btnContainer.style.order = "2"
        btnnewcard.style.visibility = "visible"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
 console.log(message)
}

function check(){
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
        messageEl.textContent = message
        start.style.visibility = "hidden"
        btnnewcard.style.visibility = "visible"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
        messageEl.textContent = message
    } else {
        message = "You're out of the game! "
        isAlive = false
        messageEl.textContent = message
    }
    console.log(message)
}


function sumnewCard(){
    let newestCard = Math.floor(Math.random() * (11 - 2 + 1) + 2)
    let result = sum + newestCard
    sum = result
    sumEl.textContent ="Sum: " +result
    cards.textContent += " - "+newestCard
    check() 
}

function reset(){
    sumEl.textContent = "Sum: "
    cards.textContent = "Cards: "
    start.style.visibility = "visible"
    btnnewcard.style.visibility = "hidden"
    messageEl.textContent = ""
    sum = 0
}

/**
 * 
 * console.log('Primer carta',firstCard)
    console.log('Segunda carta',secondCard)
    console.log('Suma de las dos primeras',sum)
    console.log('Nueva carta',newestCard)
    console.log('suma de las dos primeras + nueva',result)
    
 */