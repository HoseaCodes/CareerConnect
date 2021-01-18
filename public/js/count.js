const countEl = document.getElementById('count');

updateVistorCount();

function updateVistorCount() {
    fetch('https://api.countapi.xyz/update/dominique/best/?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        });
}

function timer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        console.log(timer)
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}



document.getElementById("start").addEventListener("click", function () {
    console.log("click")
    var timerMinutes = 60 * 48,
        display = document.querySelector('#time');
    timer(timerMinutes, display);
})
