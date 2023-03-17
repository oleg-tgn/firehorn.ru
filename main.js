var video = document.getElementById("myVideo");

// Get the button
let btn = document.getElementById("myBtn");
let play = document.getElementById("play");
let pause = document.getElementById("pause");

// Pause and play the video, and change the button text
function playPause() {
    if (video.paused) {
        video.play();
        play.style.display = "none";
        pause.style.display = "block";
    } else {
        video.pause();
        play.style.display = "block";
        pause.style.display = "none";
    }
}

const progress = document.getElementById("progress");
//const timer = document.getElementById( "timer" );

function progressLoop() {
  setInterval(function () {
    progress.value = Math.round((video.currentTime / 12) * 100);
    //timer.innerHTML = Math.round(video.currentTime) + " seconds";
  });
}

progressLoop();