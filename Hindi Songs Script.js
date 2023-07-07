let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let imageIndex = 0;
let imageElement = new Image('covers/1.jpg')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let banner = document.getElementById('banner');
let songBanner = document.getElementsByClassName('songBanner')
let songI = document.getElementById('songI')

let songs = [
    {songName: "Aankhon Mein Teri Ajab Si", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Ae Dil Hai Mushkil", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Agar Tum Saath Ho", filePath: "songs3.mp3/", coverPath: "covers/3.jpg"},
    {songName: "Hawayein", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Bhar Do Jholi Meri", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Khairiyat", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ik Vaari Aa", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Jab Tak", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg"},
    {songName: "Jeena Jeena", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Pasoori", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Kaun Tujhe", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Kesariya", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Maiyya Mainu", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Raabta", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Samjhawan", filePath: "songs/15.mp3", coverPath: "covers/15.jpeg"},
    {songName: "Tere Sang Yaara", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "Teri Mitti", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "Zaalima", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
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
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        imageElement.src = `covers/${imageIndex+1}.jpg`;
        banner.src = songs[imageIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=17){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    imageElement.src = `covers/${imageIndex+1}.jpg`;
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
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    imageElement.src = `covers/${imageIndex+1}.jpg`;
    banner.src = songs[imageIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})