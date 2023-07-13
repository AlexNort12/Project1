const video = document.getElementById("v")
const pause = document.getElementById("pause")
const mute = document.getElementById("mute1")
const next = document.getElementById("next1")
const prev = document.getElementById("prev1")
const playlist = ["v1", "v2", "v3"]
let numberVideo = 0
function stop() {
	if(video.paused){
		video.play()
	}else{
		video.pause()
	}
}
function mute1() {
	if(video.muted){
		video.muted = false
		mute.innerHTML = "mute"
	}else{
		video.muted = true
		mute.innerHTML = "unmute"
	}
}
function next1() {
	if(numberVideo < playlist.length - 1){
		numberVideo ++;
	}else{
		numberVideo = 0;
	}
	video.src = `video/${playlist[numberVideo]}.mp4`;
	console.log(numberVideo)
}

function prev1() {
   if (numberVideo !== 0) {
   	 numberVideo --;
   } else {
   	numberVideo = playlist.length - 1
   }
   video.src = `video/${playlist[numberVideo]}.mp4`;
}






