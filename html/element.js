function aisleVideo() {
	return this.file;
}

function endcapVideo() {
	if(this.index == 0) {
		this.index = 1;
		return this.first_file;
	} else {
		this.index = 0;
		return this.second_file;
	}
}

function endcapShouldPlayAnotherVideo() {
	return this.videoHolder.index == 1;
}

function aisleShouldPlayAnotherVideo() {
	return false;
}

function audioSrc() {
	return this.audio_array[Math.floor(Math.random()*this.audio_array.length)];
}

function Aisle(videoHolder, name, has_encounter, encounter) {
	this.videoHolder = videoHolder;
	this.name = name;
	this.is_endcap = false;
	this.shouldPlayAnotherVideo = aisleShouldPlayAnotherVideo;
	this.has_encounter = has_encounter;
	this.encounter = encounter;//turn into array
	this.is_encounter = false;
}

function AisleEncounter(videoHolder, name) {
	this.videoHolder = videoHolder;
	this.name = name;
	this.is_endcap = false;
	this.shouldPlayAnotherVideo = aisleShouldPlayAnotherVideo;
	this.is_encounter = true;
}

function Endcap(videoHolder, name) {
	this.videoHolder = videoHolder;
	this.name = name;
	this.is_endcap = true;
	this.shouldPlayAnotherVideo = endcapShouldPlayAnotherVideo;
}

function AisleVideo(file) {
	this.file = file;
	this.nextVideo = aisleVideo;
}

function AisleEncounterVideo(file, audio_array, audio_offset) {
	this.file = file;
	this.nextVideo = aisleVideo;
	this.audio_array = audio_array;
	this.audio_offset = audio_offset;
	this.audioSrc = audioSrc;
}

function EndcapVideo(first_file, second_file) {
	this.first_file = first_file;
	this.second_file = second_file;
	this.index = 0;
	this.nextVideo = endcapVideo;
}


