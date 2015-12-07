function AisleEndNorth(left, right, south, video) {
	this.left = left;
	this.right = right;
	this.south = south;
	this.video = video;
}

function AisleEndSouth(left, right, north, video) {
	this.left = left;
	this.right = right;
	this.north = north;
	this.video = video;
}

function EndcapNorth(left, right) {
	
}

function EndcapSouth(left, right) {
	
}

function AisleVideo(file, audio_time, audio_array, alternate_array) {
	
}

function EndcapVideo() {
	
}

//aisles moving north
var twoNorth, threeNorth, fourNorth, fiveNorth, sixNorth, sevenNorth;

//aisles moving south
var twoSouth, threeSouth, fourSouth, fiveSouth, sixSouth, sevenSouth

//north endcaps moving east
var twoThreeNorth, threeFourNorth, fourFiveNorth, fiveSixNorth, sixSevenNorth;

//north endcaps moving west
var sevenSixNorth, sixFiveNorth, fiveFourNorth, fourThreeNorth, threeTwoNorth;

//south endcaps moving east
var twoThreeSouth, threeFourSouth, fourFiveSouth, fiveSixSouth, sixSevenSouth;

//south endcaps moving west
var sevenSixSouth, sixFiveSouth, fiveFourSouth, fourThreeSouth, threeTwoSouth;

//northbound aisle videos
var twoNorthVideo, threeNorthVideo, fourNorthVideo, fiveNorthVideo, sixNorthVideo, sevenNorthVideo;

//southbound aisle videos
var twoSouthVideos, threeSouthVideo, fourSouthVideo, fiveSouthVideo, sixSouthVideo, sevenSouthVideo;


//aisle video objects
twoNorthVideo = new AisleVideo(file, audio_time, audio_array, alternate_array);
threeNorthVideo = new AisleVideo(file, audio_time, audio_array, alternate_array);
TODO


//aisles moving north objects
twoNorth = new AisleEndNorth(twoNorthVideo);
threeNorth = new AisleEndNorth(threeNorthVideo);
TODO

//aisles moving north graph
twoNorth.left = twoThreeNorth;
twoNorth.right = twoThreeNorth;
twoNorth.south = twoSouth;

threeNorth.left = threeTwoNorth;
threeNorth.right = threeFourNorth;
threeNorth.south = threeSouth;

TODO

fourNorth = new AisleEndNorth(fourThreeNorth, fourFiveNorth, fourSouth, fourNorthVideo);
fiveNorth = new AisleEndNorth(fiveFourNorth, fiveSixNorth, fiveSouth, fiveNorthVideo);
sixNorth = new AisleEndNorth(sixFiveNorth, fiveSixNorth, sixSouth, sixNorthVideo);
sevenNorth = new AisleEndNorth(sevenSixNorth, sevenSixNorth, sevenSouth, sevenNorthVideo);

//aisles moving south
twoSouth = new AisleEndSouth(twoThreeSouth, twoThreeSouth, twoNorth);
threeSouth = new AisleEndSouth(threeFourSouth, threeTwoSouth, threeNorth);
fourSouth = new AisleEndSouth(fourFiveSouth, fourThreeSouth, fourNorth);
fiveSouth = new AisleEndSouth(fiveSixSouth, fiveFourSouth, fiveNorth);
sixSouth = new AisleEndSouth(sixSevenSouth, sixFiveSouth, sixNorth);
sevenSouth = new AisleEndSouth(sevenSixSouth, sevenSixSouth, sevenNorth);

//north endcaps moving east 23 34 45 56 67
sixSevenNorth = new EndcapNorth(sevenNorth, sevenNorth);
fiveSixNorth = new EndcapNorth(sixSevenNorth, sixNorth);
fourFiveNorth = new EndcapNorth(fiveSixNorth, fiveNorth);
threeFourNorth = new EndcapNorth(fourFiveNorth, fourNorth);
twoThreeNorth = new EndcapNorth(threeFourNorth, threeNorth);

//north endcaps moving west 32 43 54 65 76
threeTwoNorth = new EndcapNorth(twoNorth, twoNorth);
fourThreeNorth = new EndcapNorth(threeNorth, twoThreeNorth);
fiveFourNorth = new EndcapNorth(fourNorth, threeFourNorth);
sixFiveNorth = new EndcapNorth(fiveNorth, fourFiveNorth);
sevenSixNorth = new EndcapNorth(sixNorth, fiveSixNorth);

//south endcaps moving east 23 34 45 56 67
twoThreeSouth = new EndcapSouth(threeSouth, threeFourSouth);
threeFourSouth = new EndcapSouth(fourSouth, fourFiveSouth);
fourFiveSouth = new EndcapSouth(fiveSouth, fiveSixSouth);
fiveSixSouth = new EndcapSouth(sixSouth, sixSevenSouth);
sixSevenSouth = new EndcapSouth(sevenSouth, sevenSouth);

//south endcaps moving west 76 65 54 43 32
sevenSixSouth = new EndcapSouth(sixFiveSouth, sixSouth);
sixFiveSouth = new EndcapSouth(fiveFourSouth, fiveSouth);
fiveFourSouth = new EndcapSouth(fourThreeSouth, fourSouth);
fourThreeSouth = new EndcapSouth(threeTwoSouth, threeSouth);
threeTwoSouth = new EndcapSouth(twoSouth, twoSouth);

