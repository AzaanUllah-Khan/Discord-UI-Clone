var micO = false
var headO = false

function mic(){
    if(!micO){
        document.getElementById("mic").className = "fa-solid fa-microphone-slash mute"
        micO = true
    }else{
        document.getElementById("mic").className = "fa-solid fa-microphone"
        micO = false
    }
}
function headp(){
    if(!headO){
        document.getElementById("head").className = "fa-solid fa-headphones mute"
        headO = true
    }else{
        document.getElementById("head").className = "fa-solid fa-headphones"
        headO = false
    }
}