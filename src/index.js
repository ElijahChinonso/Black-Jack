// let player = {
//     name: "Elijah:",
//     chips: 120
// }
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let CardsEl =document.getElementById("cards-el")

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + " $" + player.chips

// Create a function getRandomCard() that returns the value number 5, use this method to set the value firstCard, secondCard and thirdCard

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        console.log(randomCard)
        return 11
    } else if (randomCard === 11) {
        console.log(randomCard)
        return 10
    } else if (randomCard === 12) {
        console.log(randomCard)
        return 10
    } else if (randomCard === 13) {
        console.log(randomCard)
        return 10
    }

    return randomCard
}
// first scenario, first card mounts up to 15 very close, u could draw another card.
// second scenario, having a king and an A's automatically gives u 21 i.e Blackjack
// third scenario, playing two cards which gives us 16, draw a new card 6  and it gives us 22 which means it has exceeded Blackjack(21)

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
    CardsEl.textContent = "Cards: "
    for (let e = 0; e < cards.length; e++) {
        CardsEl.textContent += cards[e] + "  "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "wohoo! you've got Blackjack!"
        hasBlackJack = true // To confirm if the user won or not. CASH OUT
    } else {
        message ="Sorry! you are out of the game."
        isAlive = false // To confirm if the user is alive.
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let drawCard = getRandomCard()
        sum += drawCard
        cards.push(drawCard)
        renderGame()
    }
}


//In Blackjack the "J, Q and K are all value 10" and the "A's is either 1 or 11", so lets modify the getRandomCard
//if '1 -->   11' and 'if 11, 12, 13 -->   10'
