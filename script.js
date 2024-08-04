var micO = false
var headO = false

window.onload = function () {
    setTimeout(function () {
        var loader = document.getElementById('loader');
        if (loader) {
            loader.remove();
        }
    }, 2000);
};

var x = new Audio("./Assets/discordmute_IZNcLx2.mp3"); // Make sure this URL points directly to an audio file
var y = new Audio("./Assets/discord-unmute-sound.mp3"); // Make sure this URL points directly to an audio file

function mic() {
    if (!micO) {
        x.play();
        document.getElementById("mic").className = "fa-solid fa-microphone-slash mute";
        micO = true;
    } else {
        y.play();
        document.getElementById("mic").className = "fa-solid fa-microphone";
        micO = false;
    }
}

function headp() {
    if (!headO) {
        x.play();
        document.getElementById("head").className = "fa-solid fa-headphones mute"
        headO = true
    } else {
        document.getElementById("head").className = "fa-solid fa-headphones"
        y.play();
        headO = false
    }
}