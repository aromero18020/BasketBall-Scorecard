let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeCounter = 0;
let guestCounter = 0;

function addOneToHome() {
    homeCounter += 1;
    homeScoreEl.textContent = homeCounter;
}

function addTwoToHome() {
    homeCounter += 2;
    homeScoreEl.textContent = homeCounter;
}

function addThreeToHome() {
    homeCounter += 3;
    homeScoreEl.textContent = homeCounter;
}

function addOneToGuest() {
    guestCounter += 1;
    guestScoreEl.textContent = guestCounter;
}

function addTwoToGuest() {
    guestCounter += 2;
    guestScoreEl.textContent = guestCounter;
}

function addThreeToGuest() {
    guestCounter += 3;
    guestScoreEl.textContent = guestCounter;
}

