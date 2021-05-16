function hot_keys(el) {

    switch (el.key) {
        case "Enter":
            if (first_time_used) {
                use_set_interval();
                first_time_used = false;
            }
            document.getElementById("button1").innerHTML = on_click_button(this);
            set_seconds(11);
            break;
        case " ":
            if (first_time_used) {
                use_set_interval();
                first_time_used = false;
            }
            document.getElementById("button1").innerHTML = on_click_button(this);
            set_seconds(11);
            break;
    }
}

addEventListener("keydown", hot_keys);