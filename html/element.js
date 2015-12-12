function aisleVideo() {
	return this.file;
}

function aisleEncounterVideo() {
	this.index = Math.floor(Math.random()*this.file_array.length);
	return this.file_array[this.index];
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
	audio_tracks = this.audio_array[this.index];
	return audio_tracks[Math.floor(Math.random()*audio_tracks.length)];
}

function audioOffset() {
	return this.audio_offset_array[this.index];
}

function deathOffset() {
	return this.death_offset_array[this.index];
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

function AisleEncounterVideo(file_array, audio_array, audio_offset_array, is_fatal, death_offset_array) {
	this.file_array = file_array;
	this.index = 0;
	this.nextVideo = aisleEncounterVideo;
	this.audio_array = audio_array;
	this.audio_offset_array = audio_offset_array;
	this.is_fatal = is_fatal;
	this.death_offset_array = death_offset_array;
	this.audioSrc = audioSrc;
	this.audioOffset = audioOffset;
	this.deathOffset = deathOffset;
}

function EndcapVideo(first_file, second_file) {
	this.first_file = first_file;
	this.second_file = second_file;
	this.index = 0;
	this.nextVideo = endcapVideo;
}


