const _buttons = document.getElementsByClassName("buttons");
const _stopwatch = document.getElementsByClassName("stopwach");
const _startBtn = document.getElementsByClassName("start")[0];
const _resetBtn = document.getElementsByClassName("reset")[0];
const _timer = document.querySelector("#timer");

//let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let elapsedTime = 0;
let startTime = 0;
let interval;

const stopBtnDiv = document.createElement("div");
stopBtnDiv.classList.add("stop");
stopBtnDiv.classList.add("btn");
stopBtnDiv.innerHTML = `<span>Stop</span>`;


const startStopwatch = () => {
    if (!interval) {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateStopwatch, 1000);  
    }

    _startBtn.replaceWith(stopBtnDiv);
}

const updateStopwatch = () => {
    elapsedTime = Date.now() - startTime;

    seconds = Math.floor((elapsedTime / 1000) % 60);
    minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    hours = Math.floor(elapsedTime / 1000 / 60 / 60);

    _timer.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

}

const stopStopwatch = () => {
    clearInterval(interval);
    elapsedTime = Date.now() - startTime;
    interval = null;

    stopBtnDiv.replaceWith(_startBtn);
}

const resetStopwatch = () => {
    stopStopwatch();
    elapsedTime = 0;
    _timer.innerText = "00:00:00";
}

_startBtn.addEventListener("click", startStopwatch);

stopBtnDiv.addEventListener("click", stopStopwatch);

_resetBtn.addEventListener("click", resetStopwatch);

const pad = (num) => {
    return (num < 10 ? "0" : "") + num;
}





