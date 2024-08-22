const musicContainer =    document.querySelector('.music-container');
const playBtn =           document.querySelector('#play');
const prevBtn =           document.querySelector('#prev');    
const nextBtn =           document.querySelector('#next');
const audio =             document.querySelector('#audio');
const progress =          document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title =             document.querySelector('.#title');
const cover =             document.querySelector('#cover');


// Song titles
const songs = ['Tu hai kahan', 'Skechers', 'Wishes', 'Mi amor', 'Excuses'];

// keep track of songs i
const songIndex = 4;

// Initially loads songs into DOM
loadSongs( songs[songIndex])

//update songs details
function loadSongs(song) {
    title.innerText = song;
    audio.src = `Music/${song}.mp3`;
    cover.src = `Images/${song}.jpg`;
}



