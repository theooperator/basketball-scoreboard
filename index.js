let homeScore = 0;
let guestScore = 0;

function addToHomeScore(points) {
    homeScore += points;
    document.querySelector('#home-number-box > span').textContent = homeScore;
}

function addToGuestScore(points) {
    guestScore += points;
    document.querySelector('#guest-number-box > span').textContent = guestScore;
}