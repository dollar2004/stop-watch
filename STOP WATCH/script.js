// script.js
let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let holdTime = 0;

function start() {
    if (!running) {
        startTime = new Date().getTime() - holdTime;
        tInterval = setInterval(getShowTime, 1000); // update time every second
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function hold() {
    if (running) {
        clearInterval(tInterval);
        holdTime = difference;
        running = false;
    } else {
        start();
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('display').innerHTML = hours + ":" + minutes + ":" + seconds;
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('hold').addEventListener('click', hold);
