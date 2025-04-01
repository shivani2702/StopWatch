let secondsElapsed = 0; //how many seconds passed
let interval = null; //store setInterval reference
const time = document.getElementById("time"); //select the element of time where time will show
function padStart(value) {
    return String(value).padStart(2, "0");
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    secondsElapsed++;
    setTime()
}
function startClock() {

    if (interval) stopClock();
    interval = setInterval(timer, 1000)

}
function stopClock() {
    clearInterval(interval);
}
function resetClock() {
    stopClock();
    secondsElapsed = 0;
    setTime();
}