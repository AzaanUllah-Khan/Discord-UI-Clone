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
function head(){
    if(headO){

    }else{}
}