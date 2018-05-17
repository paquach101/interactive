function startAnimation() {
    var frameHeight = 102;
    var frames = 15;
    var frame = 0;
    var div = document.getElementById("animation");
    setInterval(function () {
        var frameOffset = (++frame % frames) * -frameHeight;
        div.style.backgroundPosition = "0px " + frameOffset + "px";
    }, 100);
}
    var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

        var i = 1;

        window.setInterval(function() {
            document.body.style.backgroundColor = colors[i];
            i++;
            if (i === colors.length) {
                i = 0;
            }
        }, 500);
