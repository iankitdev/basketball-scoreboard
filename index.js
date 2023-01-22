let homeCount = document.getElementById("home-count")
let guestCount = document.getElementById("guest-count")

let homeScore = 0

let guestScore = 0

function home1 (){
    homeScore += 1
    homeCount.textContent=homeScore
}

function home2 (){
    homeScore += 2
    homeCount.textContent=homeScore
}

function home3 (){
    homeScore += 3
    homeCount.textContent=homeScore
}

function guest1 (){
    guestScore += 1
    guestCount.textContent = guestScore
}

function guest2 (){
    guestScore += 2
    guestCount.textContent = guestScore
}

function guest3 (){
    guestScore += 3
    guestCount.textContent = guestScore
}

function newGame(){
    homeScore = 0
    homeCount.textContent = homeScore
    guestScore = 0
    guestCount.textContent = guestScore

}