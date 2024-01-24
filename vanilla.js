const _stopwatch = document.getElementsByClassName("stopwach");
const _startBtn = document.getElementsByClassName("start");
const _stopBtn = document.getElementsByClassName("stop");
const _resetBtn = document.getElementsByClassName("reset");

window.onload = () => {
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    let startTime = 0;
    let elapsedTime = 0;
    let interval;

    _startBtn[0].addEventListener("click", startStopwatch);

    updateStopwatch();
}

const startStopwatch = (startTime, elapsedTime, interval) => {
    if (!interval) {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateStopwatch, 1000);
    }     
}

const updateStopwatch = () => {
    const _timer = document.querySelector("#timer");

}





