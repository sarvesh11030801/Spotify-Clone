let songIndex = 0;
let audioElement = new Audio('songsM/1.mp3');
let imageIndex = 0;
let imageElement = new Image('coversM/1.jpg');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let banner = document.getElementById('banner');
let songBanner = document.getElementsByClassName('songBanner')
let songI = document.getElementById('songI')

let songs = [
    {songName: "Mauli Mauli", filePath: "songsM/1.mp3", coverPath: "coversM/1.jpg"},
    {songName: "Raja Aala", filePath: "songsM/2.mp3", coverPath: "coversM/2.jpg"},
    {songName: "Shivba Aamcha Malhari", filePath: "songsM3.mp3/", coverPath: "coversM/3.jpg"},
    {songName: "Shwasat Raja Dhyasat Raja", filePath: "songsM/4.mp3", coverPath: "coversM/4.jpg"},
    {songName: "Sukh Kalale", filePath: "songsM/5.mp3", coverPath: "coversM/5.jpg"},
    {songName: "Ved Lavlay", filePath: "songsM/6.mp3", coverPath: "coversM/6.jpg"},
    {songName: "Ved Tujha", filePath: "songsM/7.mp3", coverPath: "coversM/7.jpeg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[songIndex].songName;
        banner.src = songs[songIndex].img;
        gif.style.opacity = 1;
        songBanner.style.backgroundImage = "";
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// songI.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         masterSongName.innerText = songs[songIndex].songName;
//         banner.src = songs[songIndex].img;
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// masterPlay.addEventListener('click', function onClick(event) {
//     banner.style.backgroundColor = "pink";
// });

// function myFunction() {
//     document.getElementById("banner").style.backgroundImage = "songs[i].coverPath";
// }

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songsM/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        imageElement.src = `coversM/${imageIndex+1}.jpg`;
        banner.src = songs[imageIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songsM/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    imageElement.src = `coversM/${imageIndex+1}.jpg`;
    banner.src = songs[imageIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songsM/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    imageElement.src = `coversM/${imageIndex+1}.jpg`;
    banner.src = songs[imageIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})