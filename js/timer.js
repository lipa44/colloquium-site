let seconds, first_time_used = true, x;

function set_seconds(new_s) {
    seconds = new_s;
    document.getElementById("timer").innerHTML = new_s;
}

function use_set_interval() {
    x = setInterval(function () {
        seconds = document.getElementById("timer").innerHTML;

        document.getElementById("timer").innerHTML = seconds;

        if (seconds <= 0) {
            stop_timer();

            document.getElementById("button1").innerHTML = "Отчёт на почту, следующая.";
            document.getElementById("timer").innerHTML = "Время вышло";
            seconds = 10;
        } else {
            seconds--;
            document.getElementById("timer").innerHTML = seconds;
        }
    }, 1000);
}

function stop_timer() {
    clearInterval(x);
}
