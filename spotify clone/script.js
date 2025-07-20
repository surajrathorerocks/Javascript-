console.log("Welcome to Spotify")
//Intialize the Varibles
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlayer = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { SongsName: " Wariyo Mortal", filePath: "song/1.mp3", CoverPath: "covers/1.jpg" },
    { SongsName: " Trap Cartel", filePath: "song/2.mp3", CoverPath: "covers/2.jpg" },
    { SongsName: " They Mad (Lowkey Pasci)", filePath: "song/3.mp3", CoverPath: "covers/3.jpg" },
    { SongsName: " Rich The Kid", filePath: "song/4.mp3", CoverPath: "covers/4.jpg" },
    { SongsName: " Lonely", filePath: "song/5.mp3", CoverPath: "covers/5.jpg" },
    { SongsName: " Safety Dance", filePath: "song/6.mp3", CoverPath: "covers/6.jpg" },
    { SongsName: "Back it Up ", filePath: "song/7.mp3", CoverPath: "covers/7.jpg" },
    { SongsName: " No one can", filePath: "song/8.mp3", CoverPath: "covers/8.jpg" }
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].CoverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].SongsName;
});

//audioElementplay();
//Handle play/pause Click
masterPlayer.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlayer.classList.remove('fa-circle-play');
        masterPlayer.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
         makeAllPlays();
        document.getElementById(songIndex).classList.remove('fa-circle-play');
        document.getElementById(songIndex).classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        masterPlayer.classList.remove('fa-circle-pause');
        masterPlayer.classList.add("fa-circle-play");
        gif.style.opacity = 0;
        makeAllPlays();
    }
})
//Listen to event
audioElement.addEventListener('timeupdate', () => {


    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)

    myProgressBar.value = progress;
   

})
 myProgressBar.addEventListener('change', () => {
        audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    })
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        let clickedIndex = parseInt(e.target.id);

        if (songIndex === clickedIndex && !audioElement.paused) {
            // Pause the same song
            audioElement.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            masterPlayer.classList.remove('fa-circle-pause');
            masterPlayer.classList.add('fa-circle-play');
            gif.style.opacity = 0;
        } else {
            // Play a new song or resume after pause
            makeAllPlays();
            songIndex = clickedIndex;
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            mastersongName.innerText = songs[songIndex].SongsName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlayer.classList.remove('fa-circle-play');
            masterPlayer.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
        }
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 7) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    mastersongName.innerText = songs[songIndex].SongsName;
    audioElement.play();
    masterPlayer.classList.remove('fa-circle-play');
    gif.style.opacity = 1;
    masterPlayer.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <=0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    mastersongName.innerText = songs[songIndex].SongsName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlayer.classList.remove('fa-circle-play');
    gif.style.opacity = 1;
    masterPlayer.classList.add('fa-circle-pause');
})
 audioElement.addEventListener('ended',()=>{
    document.getElementById('next').click();
 })