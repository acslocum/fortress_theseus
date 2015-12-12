var KEY_LEFT = 74;//J
var KEY_P = 79;
var KEY_E = 71;
var KEY_RIGHT = 76;//L
var KEY_SPACE = 32;

var EVENT_CHANCE = 0.70;
var START_SCREEN_TIMEOUT = 20000;
var VIDEO_VOLUME = 0.5;
var MUSIC_VOLUME = 0.5;
var TALK_VOLUME = 1.0;

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
		hideArrows();
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
	hideGameOver();
	getAudio().pause();
	getBackgroundAudio().play();
	getBackgroundAudio().volume=MUSIC_VOLUME;
	getBackgroundAudio().loop=true;
	hideArrows();
	hideInstructions();
	video = getVideo();
	video.style.visibility="visible";
	video.style.cssText="";
	playVideo(video, state.videoHolder.nextVideo());
	lastKeypress = null;
	
}

function getVideo() {
	return document.getElementById("theVideo");
}

function getAudio() {
	return document.getElementById("theAudio");
}

function getBackgroundAudio() {
	return document.getElementById("backgroundAudio");
}

function getOverlay() {
	return document.getElementById("gameOver");
}

function getArrows() {
	return document.getElementById("arrows");
}

function getInstructions() {
	return document.getElementById("instructions");
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
		hideArrows();
		playVideo(video,videoHolder.nextVideo());
		
	}
}

function playVideo(video,src) {
	video.src = src;
	video.load();
	video.volume = VIDEO_VOLUME;
	video.play();
}

function playAudio(audio,src) {
	audio.src = src;
	audio.load();
	audio.volume = TALK_VOLUME;
	audio.play();
}

function shouldWaitForUser(state) {
	return (state instanceof Aisle || state instanceof AisleEncounter) && (lastKeypress == null);
}

function playGameOver() {
	getBackgroundAudio().pause();
	audio = getAudio();
	playAudio(audio,"audio/gameOver.mp3");
	setTimeout(showStartScreen, START_SCREEN_TIMEOUT);
}

function overlayGameOver() {
	video = getVideo();
	video.style.cssText="-webkit-filter:grayscale(100%);";
	showGameOver();
}

function showStartScreen() {
	hideGameOver();
	video = getVideo();
	video.style.visibility="hidden";
	showInstructions();
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
		if(keyIs(key,KEY_LEFT)) {
			return state.left;
		}
		if(keyIs(key,KEY_RIGHT)) {
			return state.right;
		}
		return state;
	}
}

function checkTimeEvents(event) {
	checkGameOver(event);
	checkStartAudio(event);
	checkShowArrows(event);
}

function checkShowArrows(event) {
	if(isVideoAlmostDone(getVideo()) && !state.is_endcap && lastKeypress == null) {
		showArrows();
	}
}

function checkGameOver(event) {
	if(isFatal(state)) {
		if(Math.abs(event.target.currentTime - state.videoHolder.deathOffset()) < 1) {
			getVideo().pause();
			playGameOver();
			overlayGameOver();
		}
	}
}

function checkStartAudio(event) {
	if(state != null && state.is_encounter) {
		if(Math.abs(event.target.currentTime - state.videoHolder.audioOffset()) < 0.5) {
			audio = getAudio();
			playAudio(audio, state.videoHolder.audioSrc());
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

function showInstructions() {
	instructions = getInstructions();
	instructions.style.visibility="visible";
}

function hideInstructions() {
	instructions = getInstructions();
	instructions.style.visibility="hidden";
}

function showArrows() {
	arrows = getArrows();
	arrows.style.visibility='visible';
}

function hideArrows() {
	arrows = getArrows();
	arrows.style.visibility="hidden";
}

function showGameOver() {
	div = getOverlay();
	div.style.visibility="visible";	
}

function hideGameOver() {
	div = getOverlay();
	div.style.visibility="hidden";
}

function isVideoAlmostDone(video) {
	return (video.duration - video.currentTime) <= 5;
}

function isVideoDone(video) {
	return video.duration == video.currentTime;
}

function keyIsL(event) {
	return keyIs(event.keyCode, KEY_LEFT);
}

function keyIsP(event) {
	return event.keyCode == KEY_P;
}

function keyIsE(event) {
	return event.keyCode == KEY_E;
}

function keyIsR(event) {
	return keyIs(event.keyCode, KEY_RIGHT);
}

function keyIsSpace(event) {
	return keyIs(event.keyCode,KEY_SPACE);
}

function keyIs(keyCode, referenceKey) {
	return keyCode == referenceKey;
}

function isValidKey(keyCode) {
	return keyIs(event.keyCode,KEY_LEFT) || keyIs(event.keyCode,KEY_RIGHT) || keyIs(event.keyCode,KEY_SPACE);
}