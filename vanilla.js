const _stopwatch = document.getElementsByClassName("stopwach");
const _startBtn = document.getElementsByClassName("start");
const _stopBtn = document.getElementsByClassName("stop");
const _resetBtn = document.getElementsByClassName("reset");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let elapsedTime = 0;
let startTime = 0;
let interval;


const startStopwatch = () => {
    if (!interval) {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateStopwatch, 1000);  
    }
}

const updateStopwatch = () => {
    const _timer = document.querySelector("#timer");

    elapsedTime = Date.now() - startTime;

    seconds = Math.floor((elapsedTime / 1000) % 60);
    minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    hours = Math.floor(elapsedTime / 1000 / 60 / 60);

    _timer.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

}

const stopStopwatch = () => {

}

_startBtn[0].addEventListener("click", startStopwatch);

const pad = (num) => {
    return (num < 10 ? "0" : "") + num;
}





