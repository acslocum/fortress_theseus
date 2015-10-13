var currentVideo = 0;
var KEY_L = 76;
var KEY_P = 79;
var KEY_E = 71;
var KEY_R = 82;

var videos = ["video/test.mp4", "video/one.mp4"];

function playNextVideo(event) {
	video = document.getElementById("theVideo");
	if(keyIsP(event)) {
		if(video.paused)
			video.play();
		else
			video.pause();
	}
	if(isVideoAlmostDone(video) && keyIsL(event)) {
		video.src = nextVideo();
		video.load();
		video.play();
	}
}

function nextVideo() {
	videoCount = videos.length
	currentVideo = (currentVideo+1)%videoCount;
	return videos[currentVideo];
}

function isVideoAlmostDone(video) {
	return (video.duration - video.currentTime) <= 5;
}

function keyIsL(event) {
	return event.keyCode == KEY_L;
}

function keyIsP(event) {
	return event.keyCode == KEY_P;
}

function keyIsE(event) {
	return event.keyCode == KEY_E;
}

function keyIsR(event) {
	return event.keyCode == KEY_R;
}