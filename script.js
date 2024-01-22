const _stopwatch = document.querySelector(".stopwatch");
const _startBtn = document.querySelector(".start");
const _resetBtn = document.querySelector(".reset");

let timer = new Timer();

    timer.start();

    timer.addEventListener('secondsUpdated', function(e) {
        $('#basicUsage').html(timer.getTimeValues().toString());
    });