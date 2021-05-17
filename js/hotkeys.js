function hot_keys(el) {

    switch (el.code) {
        case "13": // Enter
            set_next_question();
            break;
        case "32": // Space
            set_next_question();
            break;
    }
}

function set_next_question() {
    if (first_time_used) {
        use_set_interval();
        first_time_used = false;
    }
    document.getElementById("button1").innerHTML = on_click_button(this);
    set_seconds(10);
}

addEventListener("keydown", hot_keys);