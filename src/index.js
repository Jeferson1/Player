let currentSong = 1;
let songsList = [];

const title = document.querySelector("h1");
const musicInput = document.querySelector("input");
const labelInput = document.querySelector("label");
const player = document.querySelector("audio");
const previewsSongButton = document.querySelector("#prev");
const playSongButton = document.querySelector("#play");
const stopSongButton = document.querySelector("#stop");
const nextSongButton = document.querySelector("#next");

function addSongs(event) {
  songsList = event.target.files;
  labelInput.style.display = "none";
  console.log(event.target.files);
  playSong();
}

function playSong() {
  const musicURL = URL.createObjectURL(songsList[currentSong - 1]);
  player.setAttribute("src", musicURL);
  title.innerText = songsList[currentSong - 1].name;
  playSongButton.innerText = "⏸";
  player.play();
  console.log(musicURL);

  playSongButton.onclick = pauseSong;
}

function pauseSong() {
  player.pause();
  playSongButton.innerHTML = "▶";
  playSongButton.onclick = continueSong;
}

function continueSong() {
  player.play();
  playSongButton.innerText = "⏸";
  playSongButton.onclick = pauseSong;
}

function stopSong() {
  player.pause();
  player.currentTime = 0;
  playSongButton.innerText = "▶";
}

function nextSong() {
  currentSong = currentSong + 1;

  if (currentSong > songsList.length) {
    currentSong = 1;
  }

  playSong();
}

function previewSong() {
  currentSong = currentSong - 1;

  if (currentSong < 1) {
    currentSong = songsList.length;
  }

  playSong();
}

musicInput.onchange = addSongs;
stopSongButton.onclick = stopSong;
nextSongButton.onclick = nextSong;
previewsSongButton.onclick = previewSong;
