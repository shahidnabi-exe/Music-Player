const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// Song titles
const songs = [
    { title: 'excuses', extension: 'jpg' },
    { title: 'love nwantiti', extension: 'jpeg' },
    { title: 'mi amor', extension: 'jpeg' },
    { title: 'skechers', extension: 'jpeg' },
    { title: 'tu hai kahan', extension: 'jpeg' },
    { title: 'wishes', extension: 'jpg' }
];

// keep track of songs i
let songIndex = 4;

// Initially load songs into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song.title;
    audio.src = `Music/${song.title}.mp3`; 
    cover.src = `Images/${song.title}.${song.extension}`;
    audio.load(); 
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function prevSong() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {

}

// Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Change songs events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress)