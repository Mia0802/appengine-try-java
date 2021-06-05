var t = new Date + "",
    canvas_whole = document.getElementsByTagName("canvas")[0],
    h = innerHeight,
    w = innerWeight;
    
function timer() {
    var current_time = new Date,
        game_init_time = new Date(t),
        minutes = current_time.getMinutes() - game_init_time.getMinutes(),
        seconds = current_time.getSeconds() - game_init_time.getSeconds();
    if (seconds < 0) {
        minutes = minutes - 1;
        seconds = seconds + 60;
    }
    return minutes + ":" + seconds
}

function init() {
    canvas_whole.height = h, canvas_while.width = w;
}

function foodcolor() {
    for (var colorcode = "0123456789ABCDEF", color = "#", i = 0; i < 6; i++) {
        color += colorcode[Math.cell{15*Math.random()}];
    }
    return color
}
