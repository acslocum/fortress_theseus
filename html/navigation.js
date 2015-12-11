var KEY_L = 76;
var KEY_P = 79;
var KEY_E = 71;
var KEY_R = 82;
var KEY_SPACE = 32;

var startSpots = {oneNorth, twoNorth, threeNorth, fourNorth, fiveNorth, sixNorth};


var lastKeypress = null;

function startSpot() {
	return startSpots[(int)(random()*6)];
}

var state = startSpot();


function keyPressEvent(event) {
	if(isValidKey(event.keyCode)) {
		lastKeypress = event.keyCode;
	}
}

function playNextVideo(event) {
	video = document.getElementById("theVideo");

	if(isVideoDone(video) && !shouldWaitForUser(state,event)) {
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

function shouldWaitForUser(state,event) {
	return (state instanceof Aisle && event.type=="ended")
}

function nextState(state, event) {
	key = lastKeypress;
	lastKeyPress = null;
	if(state.is_endcap) {
		if(shouldRunEncounter(state.nextAisle)) {
			return state.next_aisle.encounter;
		}
		return state.next_aisle;
	} else {
		if(keyIs(key,KEY_L)) {
			return state.left;
		}
		if(keyIs(key,KEY_R)) {
			return state.right;
		}
		return state;
	}
}

function checkStartAudio(event) {
	if(state.is_encounter) {
		if(event.currentTime == state.audio_offset) {
			audio = document.getElementById("theAudio");
			audio.source = state.audio_src;
			audio.load();
			audio.play();
		}
	}
}

function shouldRunEncounter(aisleState) {
	if(random() < 0.5) {
		return false;
	}
	if(aisleState.has_encounter) {
		return true;
	}
	return false;
}

function isVideoAlmostDone(video) {
	return (video.duration - video.currentTime) <= 5;
}

function isVideoDone(video) {
	return video.duration == video.currentTime;
}

function keyIsL(event) {
	return keyIs(event.keyCode, KEY_L);
}

function keyIsP(event) {
	return event.keyCode == KEY_P;
}

function keyIsE(event) {
	return event.keyCode == KEY_E;
}

function keyIsR(event) {
	return keyIs(event.keyCode, KEY_R);
}

function keyIsSpace(event) {
	return keyIs(event.keyCode,KEY_SPACE);
}

function keyIs(keyCode, referenceKey) {
	return keyCode == referenceKey;
}

function isValidKey(keyCode) {
	return keyIs(event.keyCode,KEY_L) || keyIs(event.keyCode,KEY_R) || keyIs(event.keyCode,KEY_SPACE);
}