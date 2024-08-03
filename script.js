var micO = false
var headO = false

window.onload = function() {
    setTimeout(function() {
      var loader = document.getElementById('loader');
      if (loader) {
        loader.remove();
      }
    }, 2000);
  };

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