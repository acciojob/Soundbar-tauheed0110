//your JS code here. If required.
const soundButtons = document.querySelectorAll(".btn");
const stopButton = document.querySelector(".stop");


let currentAudio = null;

function playSong(song){
    if(currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`./sounds/${song}`);
    currentAudio.play();

}

soundButtons.forEach(button => {
    button.addEventListener('click',()=>{
        const song = button.getAttribute("data-sound");
        playSong(song);
    })
})

// stop the song
stopButton.addEventListener('click', ()=>{
    if(currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
})