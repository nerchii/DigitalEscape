let currentSongIndex = 0;
const playlist = [
    "https://github.com/nerchii/DigitalEscape/raw/refs/heads/main/resources/music/Twenty%20One%20Pilots%20-%20Midwest%20Indigo%20.mp3",
    "https://github.com/nerchii/DigitalEscape/raw/refs/heads/main/resources/music/Twenty%20One%20Pilots%20-%20Oldies%20Station.mp3",
    "https://raw.githubusercontent.com/nerchii/DigitalEscape/main/resources/music/Joji%20-%20YEAH%20RIGHT.mp3",
    "https://github.com/nerchii/DigitalEscape/raw/refs/heads/main/resources/music/Weezer%20-%20Buddy%20Holly.mp3",
    "https://github.com/nerchii/DigitalEscape/raw/refs/heads/main/resources/music/twenty%20one%20pilots%20-%20I'm%20Not%20Okay.mp3"
];

const audioElement = document.getElementById("audioPlayer");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

function playSong() {
    audioElement.src = playlist[currentSongIndex];
    audioElement.play();
}

nextButton.onclick = () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
};

prevButton.onclick = () => {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong();
};

window.onload = playSong;