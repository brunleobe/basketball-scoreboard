let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0
let guestScore = 0

//home

let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let resetHomeScoreBtn = document.getElementById("reset-score-btn")


function increaseHomeScoreOne(){
    homeScore +=1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo(){
   homeScore +=2
   homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree(){
   homeScore +=3
   homeScoreEl.textContent = homeScore
}

function resetHomeScoreToZero(){
   homeScore = 0
   homeScoreEl.textContent = homeScore
}


//guest

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let resetGuestScoreBtn = document.getElementById("reset-score-btn")


function increaseGuestScoreOne(){
   guestScore +=1
   guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo(){
   guestScore +=2
   guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree(){
   guestScore +=3
   guestScoreEl.textContent = guestScore
}

function resetGuestScoreToZero(){
   guestScore = 0
   guestScoreEl.textContent = guestScore
}













