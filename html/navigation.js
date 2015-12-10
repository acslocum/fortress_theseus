var KEY_L = 76;
var KEY_P = 79;
var KEY_E = 71;
var KEY_R = 82;

var state = twoNorth;

function playNextVideo(event) {
	video = document.getElementById("theVideo");
	if(keyIsP(event)) {
		if(video.paused)
			video.play();
		else
			video.pause();
	}
	//if(isVideoAlmostDone(video) && keyIsL(event)) {
	if(isVideoDone(video)) {
		if(!shouldWaitForUser(state,event)) {
			if(!state.shouldPlayAnotherVideo()) {
				oldState = state;//debug only
				state = nextState(state,event);
				videoHolder = state.videoHolder;
			}
			video.src = videoHolder.nextVideo();
			video.load();
			video.play();
		}
	}
}

function shouldWaitForUser(state,event) {
	return (state instanceof Aisle && event.type=="ended")
}

function nextState(state, event) {
	if(state.is_endcap) {
		return state.next_aisle;
	} else {
		if(keyIsL(event)) {
			return state.left;
		}
		if(keyIsR(event)) {
			return state.right;
		}
	}
}

function isVideoAlmostDone(video) {
	return (video.duration - video.currentTime) <= 5;
}

function isVideoDone(video) {
	return video.duration == video.currentTime;
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