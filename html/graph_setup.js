//aisles moving north
var twoNorth, threeNorth, fourNorth, fiveNorth, sixNorth, oneNorth;
//aisles moving south
var twoSouth, threeSouth, fourSouth, fiveSouth, sixSouth, oneSouth;


//north endcaps moving east
var oneThreeNorth, threeFourNorth, fourFiveNorth, fiveSixNorth, sixSevenNorth;
//north endcaps moving west
var sevenSixNorth, sixFiveNorth, fiveFourNorth, fourThreeNorth, threeTwoNorth;
//south endcaps moving east
var twoThreeSouth, threeFourSouth, fourFiveSouth, fiveSixSouth, sixSevenSouth;
//south endcaps moving west
var sevenSixSouth, sixFiveSouth, fiveFourSouth, fourThreeSouth, threeTwoSouth;


//northbound aisle videos
var twoNorthVideo, threeNorthVideo, fourNorthVideo, fiveNorthVideo, sixNorthVideo, oneNorthVideo;
//southbound aisle videos
var twoSouthVideo, threeSouthVideo, fourSouthVideo, fiveSouthVideo, sixSouthVideo, oneSouthVideo;

//north going east endcap videos
var oneTwoNorthVideo, twoThreeNorthVideo, threeFourNorthVideo, fourFiveNorthVideo, fiveSixNorthVideo;
//north going west endcap videos
var twoOneNorthVideo, threeTwoNorthVideo, fourThreeNorthVideo, fiveFourNorthVideo, sixFiveNorthVideo;

//south going east endcap videos
var oneTwoSouthVideo, twoThreeSouthVideo, threeFourSouthVideo, fourFiveSouthVideo, fiveSixSouthVideo;
//south going west endcap videos
var twoOneSouthVideo, threeTwoSouthVideo, fourThreeSouthVideo, fiveFourSouthVideo, sixFiveSouthVideo;

var twoNorthEncounter, threeNorthEncounter, fiveNorthEncounter, oneSouthEncounter, fiveSouthEncounter, fourSouthEncounter, sixNorthEncounter, sixSouthEncounter;

var twoNorthEncounterVideo, threeNorthEncounterVideo, fiveNorthEncounterVideo, oneSouthEncounterVideo, fiveSouthEncounterVideo, fourSouthEncounterVideo, sixNorthEncounterVideo, sixSouthEncounterVideo;

//aisle video
oneNorthVideo = new AisleVideo("video/oneNorth.mp4");
twoNorthVideo = new AisleVideo("video/twoNorth.mp4");
threeNorthVideo = new AisleVideo("video/threeNorth.mp4");
fourNorthVideo = new AisleVideo("video/fourNorth.mp4");
fiveNorthVideo = new AisleVideo("video/fiveNorth.mp4");
sixNorthVideo = new AisleVideo("video/sixNorth.mp4");

oneSouthVideo = new AisleVideo("video/oneSouth.mp4");
twoSouthVideo = new AisleVideo("video/twoSouth.mp4");
threeSouthVideo = new AisleVideo("video/threeSouth.mp4");
fourSouthVideo = new AisleVideo("video/fourSouth.mp4");
fiveSouthVideo = new AisleVideo("video/fiveSouth.mp4");
sixSouthVideo = new AisleVideo("video/sixSouth.mp4");

var minotaur_audio = ["audio/minotaur1.mp3", "audio/minotaur2.mp3", "audio/minotaur3.mp3", "audio/minotaur4.mp3", "audio/minotaur5.mp3", "audio/minotaur6.mp3", "audio/minotaur7.mp3"];
var sentry_audio = ["audio/sentry1.mp3", "audio/sentry2.mp3", "audio/sentry3.mp3", "audio/sentry4.mp3", "audio/sentry5.mp3", "audio/sentry6.mp3", "audio/sentry7.mp3", "audio/sentry8.mp3", "audio/sentry9.mp3"];
var woman_audio = ["audio/woman1.mp3", "audio/woman2.mp3", "audio/woman3.mp3", "audio/woman4.mp3", "audio/woman5.mp3", "audio/woman6.mp3", "audio/woman7.mp3", "audio/woman8.mp3", "audio/woman9.mp3", "audio/woman10.mp3", "audio/woman11.mp3", "audio/woman12.mp3"]

//encounter video
twoNorthEncounterVideo = new AisleEncounterVideo("video/twoNorthEncounter1.mp4", minotaur_audio, 6);
threeNorthEncounterVideo = new AisleEncounterVideo("video/threeNorthEncounter1.mp4", sentry_audio, 10);
fiveNorthEncounterVideo = new AisleEncounterVideo("video/fiveNorthEncounter1.mp4", minotaur_audio, 5); //1 mino, 2 sentry
oneSouthEncounterVideo = new AisleEncounterVideo("video/oneSouthEncounter1.mp4", minotaur_audio, 7);
fiveSouthEncounterVideo = new AisleEncounterVideo("video/fiveSouthEncounter1.mp4", minotaur_audio, 8);
fourSouthEncounterVideo = new AisleEncounterVideo("video/fourSouthEncounter1.mp4", sentry_audio, 6);
sixNorthEncounterVideo = new AisleEncounterVideo("video/sixNorthEncounter1.mp4", woman_audio, 12);//3
sixSouthEncounterVideo = new AisleEncounterVideo("video/sixSouthEncounter1.mp4", woman_audio, 13);//timing 2


//endcap video
oneTwoNorthVideo = new EndcapVideo("video/oneNorthRight.mp4", "video/twoNorthRightEnter.mp4");
twoThreeNorthVideo = new EndcapVideo("video/twoNorthRight.mp4", "video/threeNorthRightEnter.mp4");
threeFourNorthVideo = new EndcapVideo("video/threeNorthRight.mp4", "video/fourNorthRightEnter.mp4");
fourFiveNorthVideo = new EndcapVideo("video/fourNorthRight.mp4", "video/fiveNorthLeftEnter.mp4");///////TEMPORARY until fiveNorthRightEnter exists
fiveSixNorthVideo = new EndcapVideo("video/fiveNorthRight.mp4", "video/sixNorthRightEnter.mp4");

twoOneNorthVideo = new EndcapVideo("video/twoNorthLeft.mp4", "video/oneNorthLeftEnter.mp4");
threeTwoNorthVideo = new EndcapVideo("video/threeNorthLeft.mp4", "video/twoNorthLeftEnter.mp4");
fourThreeNorthVideo = new EndcapVideo("video/fourNorthLeft.mp4", "video/threeNorthLeftEnter.mp4");
fiveFourNorthVideo = new EndcapVideo("video/fiveNorthLeft.mp4", "video/fourNorthLeftEnter.mp4");
sixFiveNorthVideo = new EndcapVideo("video/sixNorthLeft.mp4", "video/fiveNorthLeftEnter.mp4");

oneTwoSouthVideo = new EndcapVideo("video/oneSouthLeft.mp4", "video/twoSouthLeftEnter.mp4");
twoThreeSouthVideo = new EndcapVideo("video/twoSouthLeft.mp4", "video/threeSouthLeftEnter.mp4");
threeFourSouthVideo = new EndcapVideo("video/threeSouthLeft.mp4", "video/fourSouthLeftEnter.mp4");
fourFiveSouthVideo = new EndcapVideo("video/fourSouthLeft.mp4", "video/fiveSouthLeftEnter.mp4");
fiveSixSouthVideo = new EndcapVideo("video/fiveSouthLeft.mp4", "video/sixSouthLeftEnter.mp4");

twoOneSouthVideo = new EndcapVideo("video/twoSouthRight.mp4", "video/oneSouthRightEnter.mp4");
threeTwoSouthVideo = new EndcapVideo("video/threeSouthRight.mp4", "video/twoSouthRightEnter.mp4");
fourThreeSouthVideo = new EndcapVideo("video/fourSouthRight.mp4", "video/threeSouthRightEnter.mp4");
fiveFourSouthVideo = new EndcapVideo("video/fiveSouthRight.mp4", "video/fourSouthRightEnter.mp4");
sixFiveSouthVideo = new EndcapVideo("video/sixSouthRight.mp4", "video/fiveSouthRightEnter.mp4");

twoNorthEncounter = new AisleEncounter(twoNorthEncounterVideo, "twoNorthEncounter");
threeNorthEncounter = new AisleEncounter(threeNorthEncounterVideo, "threeNorthEncounter");
fiveNorthEncounter = new AisleEncounter(fiveNorthEncounterVideo, "fiveNorthEncounter");
oneSouthEncounter = new AisleEncounter(oneSouthEncounterVideo, "oneSouthEncounter");

fiveSouthEncounter = new AisleEncounter(fiveSouthEncounterVideo, "fiveSouthEncounter");
fourSouthEncounter = new AisleEncounter(fourSouthEncounterVideo, "fourSouthEncounter");
sixNorthEncounter = new AisleEncounter(sixNorthEncounterVideo, "sixNorthEncounter");
sixSouthEncounter = new AisleEncounter(sixSouthEncounterVideo, "sixSouthEncounter");

//aisles moving north objects
oneNorth = new Aisle(oneNorthVideo,"oneNorth", false, null);
twoNorth = new Aisle(twoNorthVideo,"twoNorth", true, twoNorthEncounter);
threeNorth = new Aisle(threeNorthVideo,"threeNorth", true, threeNorthEncounter);
fourNorth = new Aisle(fourNorthVideo,"fourNorth", false, null);
fiveNorth = new Aisle(fiveNorthVideo,"fiveNorth", true, fiveNorthEncounter);
sixNorth = new Aisle(sixNorthVideo,"sixNorth", true, sixNorthEncounter);

//aisles moving south
oneSouth = new Aisle(oneSouthVideo,"oneSouth", true, oneSouthEncounter);
twoSouth = new Aisle(twoSouthVideo,"twoSouth", false, null);
threeSouth = new Aisle(threeSouthVideo,"threeSouth", false, null);
fourSouth = new Aisle(fourSouthVideo,"fourSouth", true, fourSouthEncounter);
fiveSouth = new Aisle(fiveSouthVideo,"fiveSouth", true, fiveSouthEncounter);
sixSouth = new Aisle(sixSouthVideo,"sixSouth", true, sixSouthEncounter);

//north endcaps moving east 12 23 34 45 56
fiveSixNorth = new Endcap(fiveSixNorthVideo,"fiveSixNorth");
fourFiveNorth = new Endcap(fourFiveNorthVideo,"fourFiveNorth");
threeFourNorth = new Endcap(threeFourNorthVideo,"threeFourNorth");
twoThreeNorth = new Endcap(twoThreeNorthVideo,"twoThreeNorth");
oneTwoNorth = new Endcap(oneTwoNorthVideo,"oneTwoNorth");

//north endcaps moving west 21 32 43 54 65
twoOneNorth = new Endcap(twoOneNorthVideo,"twoOneNorth");
threeTwoNorth = new Endcap(threeTwoNorthVideo,"threeTwoNorth");
fourThreeNorth = new Endcap(fourThreeNorthVideo,"fourThreeNorth");
fiveFourNorth = new Endcap(fiveFourNorthVideo,"fiveFourNorth");
sixFiveNorth = new Endcap(sixFiveNorthVideo,"sixFiveNorth");

//south endcaps moving east 12 23 34 45 56
oneTwoSouth = new Endcap(oneTwoSouthVideo,"oneTwoSouth");
twoThreeSouth = new Endcap(twoThreeSouthVideo,"twoThreeSouth");
threeFourSouth = new Endcap(threeFourSouthVideo,"threeFourSouth");
fourFiveSouth = new Endcap(fourFiveSouthVideo,"fourFiveSouth");
fiveSixSouth = new Endcap(fiveSixSouthVideo,"fiveSixSouth");

//south endcaps moving west 65 54 43 32 21
sixFiveSouth = new Endcap(sixFiveSouthVideo,"sixFiveSouth");
fiveFourSouth = new Endcap(fiveFourSouthVideo,"fiveFourSouth");
fourThreeSouth = new Endcap(fourThreeSouthVideo,"fourThreeSouth");
threeTwoSouth = new Endcap(threeTwoSouthVideo,"threeTwoSouth");
twoOneSouth = new Endcap(twoOneSouthVideo,"twoOneSouth");


//aisles moving north graph
oneNorth.left = oneTwoNorth;
oneNorth.right = oneTwoNorth;

twoNorth.left = twoOneNorth;
twoNorth.right = twoThreeNorth;

threeNorth.left = threeTwoNorth;
threeNorth.right = threeFourNorth;

fourNorth.left = fourThreeNorth;
fourNorth.right = fourFiveNorth;

fiveNorth.left = fiveFourNorth;
fiveNorth.right = fiveSixNorth;

sixNorth.left = sixFiveNorth;
sixNorth.right = sixFiveNorth;

//aisles moving south graph
oneSouth.left = oneTwoSouth;
oneSouth.right = oneTwoSouth;

twoSouth.left = twoThreeSouth;
twoSouth.right = twoOneSouth;

threeSouth.left = threeFourSouth;
threeSouth.right = threeTwoSouth;

fourSouth.left = fourFiveSouth;
fourSouth.right = fourThreeSouth;

fiveSouth.left = fiveSixSouth;
fiveSouth.right = fiveFourSouth;

sixSouth.left = sixFiveSouth;
sixSouth.right = sixFiveSouth;

//encounters
twoNorthEncounter.left = twoOneNorth;
twoNorthEncounter.right = twoThreeNorth;

threeNorthEncounter.left = threeTwoNorth;
threeNorthEncounter.right = threeFourNorth;

fiveNorthEncounter.left = fiveFourNorth;
fiveNorthEncounter.right = fiveSixNorth;

oneSouthEncounter.left = oneTwoSouth;
oneSouthEncounter.right = oneTwoSouth;

fourSouthEncounter.left = fourFiveSouth;
fourSouthEncounter.right = fourThreeSouth;

fiveSouthEncounter.left = fiveSixSouth;
fiveSouthEncounter.right = fiveFourSouth;

sixNorthEncounter.left = sixFiveNorth;
sixNorthEncounter.right = sixFiveNorth;

sixSouthEncounter.left = sixFiveSouth;
sixSouthEncounter.right = sixFiveSouth;

//north endcaps
fiveSixNorth.next_aisle = sixSouth;
fourFiveNorth.next_aisle = fiveSouth;
threeFourNorth.next_aisle = fourSouth;
twoThreeNorth.next_aisle = threeSouth;
oneTwoNorth.next_aisle = twoSouth;

twoOneNorth.next_aisle = oneSouth;
threeTwoNorth.next_aisle = twoSouth;
fourThreeNorth.next_aisle = threeSouth;
fiveFourNorth.next_aisle = fourSouth;
sixFiveNorth.next_aisle = fiveSouth;

//south endcaps
oneTwoSouth.next_aisle = twoNorth;
twoThreeSouth.next_aisle = threeNorth;
threeFourSouth.next_aisle = fourNorth;
fourFiveSouth.next_aisle = fiveNorth;
fiveSixSouth.next_aisle = sixNorth;

sixFiveSouth.next_aisle = fiveNorth;
fiveFourSouth.next_aisle = fourNorth;
fourThreeSouth.next_aisle = threeNorth;
threeTwoSouth.next_aisle = twoNorth;
twoOneSouth.next_aisle = oneNorth;