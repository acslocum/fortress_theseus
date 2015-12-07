function turnLeft() {
	return this.left;
}

function turnRight() {
	return this.right;
}

function noChoice() {
	return this.default;
}


function Element(video, left, right, default, audio_time, audio_array, talk_video_array, death_video_array) {
	this.video = video;
	this.left = left;
	this.right = right;
	this.default = default;
	this.audio_time = audio_time;
	this.audio_array = audio_array;
}

var twoNorth, twoSouth, twoNorthRight, twoSouthLeft;
var twoThreeSouth, twoThreeNorthStraight;
var twoThreeNorth, twoThreeSouthStraight;

var threeNorth, threeSouth, threeNorthLeft, threeNorthRight, threeSouthLeft, threeSouthRight;
var threeTwoSouth, threeTwoNorthStraight, threeFourSouth, threeFourNorthStraight;
var threeFourNorth, threeFourSouthStraight, threeTwoNorth, threeTwoSouthStraight;

var fourNorth, fourSouth, fourNorthLeft, fourNorthRight, fourSouthLeft, fourSouthRight;
var fourThreeSouth, fourThreeNorthStraight, fourFiveSouth, fourFiveNorthStraight;
var fourFiveNorth, fourFiveSouthStraight, fourThreeNorth, fourThreeSouthStraight;

var fiveNorth, fiveSouth, fiveNorthLeft, fiveNorthRight, fiveSouthLeft, fiveSouthRight;
var fiveFourSouth, fiveFourNorthStraight, fiveSixSouth, fiveSixNorthStraight;
var fiveSixNorth, fiveSixSouthStraight, fiveFourNorth, fiveFourSouthStraight;

var sixNorth, sixSouth, sixNorthLeft, sixNorthRight, sixSouthLeft, sixSouthRight;
var sixFiveSouth, sixFiveNorthStraight, sixSevenSouth, sixSevenNorthStraight;
var sixSevenNorth, sixSevenSouthStraight, sixFiveNorth, sixFiveSouthStraight;

var sevenNorth, sevenSouth, sevenNorthLeft, sevenSouthRight;
var sevenSixSouth, sevenSixNorthStraight;
var sevenSixNorth, sevenSixSouthStraight;


twoNorth = new Element("video/twoNorth.mp4", twoNorthRight, twoNorthRight, twoNorthRight, nil, nil, nil, nil);
twoSouth = new Element("video/twoSouth.mp4", twoSouthLeft, twoSouthRight, twoSouthRight, nil, nil, [],[]);
twoNorthRight = new Element("video/twoNorthRight.mp4", twoThreeNorthStraight, twoThreeSouth, twoThreeNorthStraight, nil, nil, nil, nil); 
twoSouthLeft = new Element("video/twoSouthLeft.mp4", twoThreeSouth, twoThreeSouth, twoThreeSouth, nil, nil, nil, nil);
twoThreeSouth = new Element("video/twoThreeSouth.mp4", threeSouth, twoThreeSouthStraight, twoThreeSouthStraight, nil, nil, nil, nil);
twoThreeNorthStraight = new Element("video/twoThreeNorthStraight.mp4", threeFourNorthStraight, twoThreeSouth, threeFourNorthStraight, nil, nil, nil, nil);
twoThreeNorth = new Element("video/twoThreeNorth.mp4", threeFourNorthStraight, twoThreeSouth, threeFourNorthStraight, nil, nil, nil, nil);
twoThreeSouthStraight;

threeNorth;
threeSouth;
threeNorthLeft;
threeNorthRight;
threeSouthLeft;
threeSouthRight;
threeTwoSouth;
threeTwoNorthStraight;
threeFourSouth;
threeFourNorthStraight;
threeFourNorth;
threeFourSouthStraight;
threeTwoNorth;
threeTwoSouthStraight;

fourNorth;
fourSouth;
fourNorthLeft;
fourNorthRight;
fourSouthLeft;
fourSouthRight;
fourThreeSouth;
fourThreeNorthStraight;
fourFiveSouth;
fourFiveNorthStraight;
fourFiveNorth;
fourFiveSouthStraight;
fourThreeNorth;
fourThreeSouthStraight;

fiveNorth;
fiveSouth;
fiveNorthLeft;
fiveNorthRight;
fiveSouthLeft;
fiveSouthRight;
fiveFourSouth;
fiveFourNorthStraight;
fiveSixSouth;
fiveSixNorthStraight;
fiveSixNorth;
fiveSixSouthStraight;
fiveFourNorth;
fiveFourSouthStraight;

sixNorth;
sixSouth;
sixNorthLeft;
sixNorthRight;
sixSouthLeft;
sixSouthRight;
sixFiveSouth;
sixFiveNorthStraight;
sixSevenSouth;
sixSevenNorthStraight;
sixSevenNorth;
sixSevenSouthStraight;
sixFiveNorth;
sixFiveSouthStraight;

sevenNorth;
sevenSouth;
sevenNorthLeft;
sevenSouthRight;
sevenSixSouth;
sevenSixNorthStraight;
sevenSixNorth;
sevenSixSouthStraight;
