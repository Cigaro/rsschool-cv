const video = document.querySelector('.video-player-vid')
const playButton = document.querySelector('.play')
const playBigImg = document.querySelector('.play-big')
const videoinput = document.querySelector('.player-time')
const playerVolume = document.querySelector('.player-volume')
const buttonImg = document.querySelector('.volume-img')
const fullScreenButton = document.querySelector('.fullScreen')


console.log(video.onfullscreenchange)

function videoPlay(){
  if(video.paused){
    video.play();
  } else{
    video.pause()
  }
}

function updateButton(){
  if(this.paused){
    playButton.innerHTML = '<img src="assets/img/play.png" alt="play">'
    playBigImg.style.display = "block";
  }else{
    playButton.innerHTML = '<img src="assets/img/pause.png" alt="play">';
    playBigImg.style.display = "none";
  }
}

function videoProgress(){
  const percent = (video.currentTime / video.duration) * 100; 
  videoinput.value = percent;
  videoinput.style.background = 'linear-gradient(to right, #710707 0%, #710707 ' + percent + '%, #C4C4C4 ' + percent + '%, #C4C4C4 100%)'
}

function scrub(e){
  const scrubTime = (e.offsetX / videoinput.offsetWidth) * video.duration;
  video.currentTime = scrubTime
}

function videoVolume(){
  const videoVolume = playerVolume.value / 100
  video.volume = videoVolume
  playerVolume.style.background = 'linear-gradient(to right, #710707 0%, #710707 ' + videoVolume * 100 + '%, #C4C4C4 ' + videoVolume * 100 + '%, #C4C4C4 100%)'
  console.log(videoVolume)
  if (videoVolume == 0){
    buttonImg.innerHTML = '<img src="assets/img/mute.png" alt="mute">'
  } else {
    buttonImg.innerHTML = '<img src="assets/img/volume.png" alt="vol">'
  }
}

function muteIvent(){
  if (playerVolume.value == 0){
    buttonImg.innerHTML = '<img src="assets/img/volume.png" alt="mute">'
    playerVolume.value = 50
    videoVolume()
  } else {
    buttonImg.innerHTML = '<img src="assets/img/mute.png" alt="vol">'
    playerVolume.value = 0
    videoVolume()
  }
}


function fullScreenCancel() {
  if(document.requestFullscreen) {
    document.requestFullscreen();
  } else if(document.webkitRequestFullscreen ) {
    document.webkitRequestFullscreen();
  } else if(document.mozRequestFullscreen) {
    document.mozRequestFullScreen();
  }
}

/*Events*/
playBigImg.addEventListener('click',videoPlay)
playButton.addEventListener('click', videoPlay)
video.addEventListener('click', videoPlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate',videoProgress)
playerVolume.addEventListener('click',videoVolume)
videoinput.addEventListener('click', scrub)
buttonImg.addEventListener('click',muteIvent)

fullScreenButton.addEventListener('click',(e) =>{
  video.requestFullscreen();
})
document.addEventListener("keydown", (e)=>{
  const code = (e.keyCode == 32) ? videoPlay() : "";
});
document.addEventListener('keydown', (e) => {
  const mute = (e.keyCode == 77) ? muteIvent() : "";
})
document.addEventListener('keydown', (e)=>{
  if(e.keyCode == 70){
    if(video.fullScreenElement){
      console.log(video.fullScreenElement)
      video.fullScreenCancel()
    } else video.requestFullscreen();
  } else console.log('as')
})

