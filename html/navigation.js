var KEY_L = 76;
var KEY_P = 79;
var KEY_E = 71;
var KEY_R = 82;
var KEY_SPACE = 32;

var EVENT_CHANCE = 0.99;

var startSpots = [oneNorth, twoNorth, threeNorth, fourNorth, fiveNorth, sixNorth];

var newGameState;

var lastKeypress = null;

function startSpot() {
	//return fourSouth;
	return startSpots[Math.floor(Math.random()*startSpots.length)];
}

var state = startSpot();

function keyPressEvent(event) {
	if(isValidKey(event.keyCode)) {
		lastKeypress = event.keyCode;
	}
	if(keyIsSpace(event) && noCheating(event,state)) {
		init();
		return;
	}
	if(isVideoDone(getVideo())) {
		playNextVideo();
	}
}

function noCheating(event,state) {
	return !isFatal(state) || getVideo().paused;
}

function init() {
	state = startSpot();
	div = getOverlay();
	div.style.visibility="hidden";
	getAudio().pause();
	video = getVideo();
	video.style.cssText="";
	video.src = state.videoHolder.nextVideo();
	video.load();
	video.play();
	lastKeypress = null;
}

function getVideo() {
	return document.getElementById("theVideo");
}

function getAudio() {
	return document.getElementById("theAudio");
}

function getOverlay() {
	return document.getElementById("gameOver");
}

function isFatal(state) {
	return (state != null) && (state instanceof AisleEncounter) && state.videoHolder.is_fatal;
}

function playNextVideo() {
	video = getVideo();

	if(isVideoDone(video) && !shouldWaitForUser(state)) {
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

function shouldWaitForUser(state) {
	return (state instanceof Aisle || state instanceof AisleEncounter) && (lastKeypress == null);
}

function playGameOver() {
	audio = getAudio();
	audio.src = "audio/gameOver.mp3";
	audio.load();
	audio.play();
}

function overlayGameOver() {
	video = getVideo();
	video.style.cssText="-webkit-filter:grayscale(100%);";
	div = getOverlay();
	div.style.visibility="visible";
}

function nextState(state, event) {
	key = lastKeypress;
	lastKeypress = null;
	if(state.is_endcap) {
		if(shouldRunEncounter(state.next_aisle)) {
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

function checkTimeEvents(event) {
	checkGameOver(event);
	checkStartAudio(event);
}

function checkGameOver(event) {
	if(isFatal(state)) {
		if(Math.abs(event.target.currentTime - state.videoHolder.deathOffset()) < 1) {
			getVideo().pause();
			playGameOver();
			overlayGameOver();
			//state = newGameState;
		}
	}
}

function checkStartAudio(event) {
	if(state != null && state.is_encounter) {
		if(Math.abs(event.target.currentTime - state.videoHolder.audioOffset()) < 1) {
			audio = getAudio();
			audio.src = state.videoHolder.audioSrc();
			audio.load();
			audio.play();
		}
	}
}

function shouldRunEncounter(aisleState) {
	if(Math.random() > EVENT_CHANCE) { //no encounter
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