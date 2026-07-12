console.log ("connected"); //talking to each other

function playAudio() {
    // get the button
    var x = document.getElementById("myClassical");
    console.log("click");
    //if button is clicked, play audio
        x.play();
}

function pauseAudio() {
    var x = document.getElementById("myClassical");
    console.log("click");
    x.pause() ;
}