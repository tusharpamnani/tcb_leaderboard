let homeCount = 0;
let guestCount = 0;

let scoreHomeEl = document.getElementById("scoreHome");
let scoreGuestEl = document.getElementById("scoreGuest");

scoreHomeEl.textContent = homeCount;
scoreGuestEl.textContent = guestCount;

// for home score
function addOneHome() {
  homeCount += 100;
  scoreHomeEl.textContent = homeCount;
}
function addTwoHome() {
  homeCount -= 25;
  scoreHomeEl.textContent = homeCount;
}
function addThreeHome() {
  homeCount -= 30;
  scoreHomeEl.textContent = homeCount;
}

// for guest score
function addOneGuest() {
  guestCount += 100;
  scoreGuestEl.textContent = guestCount;
}
function addTwoGuest() {
  guestCount -= 25;
  scoreGuestEl.textContent = guestCount;
}
function addThreeGuest() {
  guestCount -= 30;
  scoreGuestEl.textContent = guestCount;
}
