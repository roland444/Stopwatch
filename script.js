// script.js uses jquery and easystopwatch.js libraries

const _stopwatch = document.querySelector(".stopwatch");
const _startBtn = document.querySelector(".start");
const _resetBtn = document.querySelector(".reset");

startTimer();

function startTimer() {


    _startBtn.onclick = () => {
        let timer = new Timer();
        
        timer.start();

        timer.addEventListener('secondsUpdated', function(e) {
            $('#timer').html(timer.getTimeValues().toString());
        });
}
}

console.log("hello")



