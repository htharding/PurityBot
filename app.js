//config environent variables
console.log("I RAN!");

require('dotenv').config();


//importing modules
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');
var replies = 0;


console.log(process.env.CLIENT_ID);
console.log(process.env.ClIENT_SECRET);
console.log(process.env.CLIENT_USER);
console.log(process.env.CLIENT_PASS);

//building snoowrap and snoostorm clients
const r = new Snoowrap({
    userAgent: 'NODE.JS LENNY FACE BOT (by /u/HTHazard)',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.CLIENT_USER,
    password: process.env.CLIENT_PASS
});

const client = new Snoostorm(r);
//configuring options that we pass into snoostorm. Determines the subreddit we will be streaming info from, and the number of results per olling cycle.

const streamOpts = {
	subreddit: 'popular',
	results: 45,
  	pollTime: 4010
}


//Create snoostorm commentstream with options
const comments = client.CommentStream(streamOpts);

//On comment, perform fancy regex check to split into dict of keywords.
var statements = ["Do you speak to your mother with that mouth? ", "That is the most vulgar thing I've heard all day; ", "Excuse me, the karma gods wouldn't appreciate that language. ", "How could you say such a vulgar phrase? ", "This phrase is so vulgar that it makes me cringe (if I physically could)... ", "With the gods as my witness, I command thee to ", "By golly, that is the worst phrase I've heard in days! ", "Do you kiss your mama' with that mouth?"];
var subreddits = ["antiMLM", "Cumtown", "BigBoobsGW", "WhipItOut", "badtattoos", "Ellie_silk", "GoneWildPetite", "cricket", "sex", "weekendgunnit", "bigdickgirl", "cumsluts", "gonewild", "RealGirls", "AsiansGoneWild", "rule34", "BiggerThanYouThought", "PetiteGoneWild", "BustyPetite", "holdthemoan", "hentai", "ass", 'WatchItForThePlot', "milf", "porninfifteenseconds", 'adorableporn', 'OnOff', 'celebnsfw', 'Amateur', 'pawg', 'gonewildcurvy', 'HappyEmbarrassedGirls', 'MassiveCock', 'GirlsFinishingTheJob', 'wifesharing', 'asstastic', 'curvy', 'gonewild30plus', 'ecchi', 'AskRedditAfterDark', 'ladybonersgw', 'LegalTeens', 'Boobies', '60fpsporn', 'homemadexxx', 'NSFW_Snapchat', 'dirtysmall', 'girlsinyogapants', 'LipsThatGrip', 'nsfwhardcore', 'collegesluts', 'Blowjobs', 'palegirls', 'pornvids', 'nsfwcosplay', 'GWcouples', 'redheads', 'anal', 'thick', 'kpopfap', 'freeuse', 'workgonewild', 'juicyasians', 'yiff', 'Stacked', 'JerkOffToCelebs', 'paag', 'altgonewild', 'tightdresses', 'bodyperfection', 'dirtysmall', 'suicidegirls', 'gonewildcolor', 'chubby', 'feet', 'GaybrosGoneWild', 'Overwatch_Porn', 'hugeboobs', 'hardbodies', 'futanari', 'Hotwife', 'FestivalSluts', 'gonewildstories', 'GoneWildTube', 'Hotchickswithtattoos', 'rearpussy', 'pussy', 'gwcumsluts', 'grool', 'lesbians', 'DarkNetMakets', 'quiver', 'facedownassup', 'randomsexiness', 'porn_gifs', 'gonewildaudio', 'O_faces', 'burstingout', 'ImGoingToHellForThis', 'StraightGirlsPlaying', 'AsianHotties', 'GirlswithGlasses', 'TinyTits', 'rearpussy', 'Unashamed', 'NSFW_HTML5', 'datgap', 'nsfwoutfits', 'HighResNSFW', 'porn', 'gettingherselfoff', 'tipofmypenis', 'CuteModeSlutMode', 'NSFW411', 'GWnerdy', 'fitgirls', 'creampies', 'jilling', 'nsfw2', 'NSFW_Japan', 'boobbounce', 'Upskirt', 'simps', 'GoneMild', 'RandomActsOfBlowJob', 'theratio', 'whenitgoesin', 'BonerMaterial', 'SheLikesItRough', 'CollegeAmateurs', 'Bondage', 'funsized', '18_19', 'suctiondildos', 'Gonewild18', 'amateurcumsluts', 'SexInFrontOfOthers', 'cumfetish', 'boltedontits', 'Innie', 'bdsm', 'JiggleFuck', 'MassiveTitsnAss', 'AnalGW', 'twinks', '2busty2hide', 'bbyPocahontas', 'DontForgetTheBalls', 'traps', 'WouldYouFuckMyWife', 'HugeDickTinyChick', 'PokePorn', 'doujinshi', 'pantsu', 'normalnudes', 'Tgirls', 'ghostnipples', 'homegrowntits', 'bimbofetish', 'AssholeBehindThong', 'dirtyr4r', 'TotallyStraight', 'BBW', 'ginger', 'incest', 'HENTAI_GIF', 'wincest', 'assholegonewild', 'IndiansGoneWild', 'boobs', 'Sexsells', 'CuteLittleButts', 'LabiaGW', 'LilyIvy', 'ConfusedBoners', 'Cuckold', 'SexyTummies', 'stupidslutsclub', 'deepthroat', 'realsexyselfies', 'gifsgonewild', 'Nsfw_Amateurs', 'dirtypenpals', 'girlskissing', 'Exxxtras', 'GoneWildSmiles', 'gonewildcouples', 'passionx', 'distension', 'voluptuous', 'cumcoveredfucking', 'ChangingRooms', 'GirlswithNeonHair', 'lingerie', 'bigasses', 'TwinGirls', 'rule34_comics', 'latinas', 'pokies', 'pelfie', 'snapleaks', 'DirtySnapchat', 'xsmallgirls', 'FlashingGirls', 'AsianNSFW', 'StruggleFucking', 'The_Donald', 'MetaCanada', 'European', 'UncensoredNews', 'CringeAnarchy', 'KotakuInAction', 'TumblrInAction', 'PussyPass', 'PussyPassDenied', 'MensRights', 'MGTOW', 'Incels', 'MLS', 'hiphopheads', 'milliondollaretreme', 'FemBoys', 'ChapoTrapHouse', 'traaaaaaannnnnnnnnns', 'im14andthisisdeep', 'SquaredCircle', 'MonsterHunter', 'FtMPorn', 'sph', 'ChurchOfTheBBC', 'brooklynninenine', 'teenagers', 'MechanicalKeyboards', 'NASCAR', 'cleavage', 'cumonher', 'butterface', 'Perfectfit', 'milliondollarextreme', 'SuddenlyGay', 'politics', 'PrivateFiction']; 

var toLower = function(x){ 
  	return x.toLowerCase();
};


comments.on('comment', (comment) => {
	process.stdout.write(".");	
	if (comment.body.length < 110 && subreddits.indexOf(comment.subreddit.display_name) == -1) {
		var randInt = Math.floor(Math.random() *statements.length);
		var authorName = comment.author.name;

		if(authorName != "PurityBot"){
			wordArr = comment.body.split(/[ ,.*]+/);
			keywords = ["unzips", "pants", "fap", "sigh", "( ͡° ͜ʖ ͡°)", "cum", "cums", "hail", "satan", "cthulu", "penetration", "daddy", "anal", "anus", "butthole", "tits", "cunt", "dick", "fag", "fags", "cock", "smegma", "spunk", "jizz", "dildo", "ballsack", "fucker" ];
			var wordArrLower = "";


			try {

				wordArrLower = wordArr.map(toLower);
			}
			catch(err) {
				console.log("Something went wrong!");
			}

			/*
			//determine if an array contains one or more items from another array.
 			* @param {array} haystack the array to search.
 			* @param {array} arr the array providing items to check for in the haystack.
 			* @return {boolean} true|false if haystack contains at least one item from arr.
 			*/
 			var counter = 0;


			keywords.some(function (e) {
				if (wordArrLower.indexOf(e) >= 0){
					counter += 1;
					wordArrLower.splice((wordArrLower.indexOf(e)),1);

				}
				if (counter >= 2){
					return true
				}
			});
			if(counter >= 2){
					comment.reply(statements[randInt] + "[REPENT, "  + authorName.toUpperCase() + "!](http://78.media.tumblr.com/c89cdf0ee4ce51465384d24e380c6914/tumblr_inline_nm1t7aIPC51s97ndd_500.jpg)\n\n^^^*I'm* ^^^*a* ^^^*bot* ^^^*that* ^^^*has*  ^^^*been* ^^^*made* ^^^*for* ^^^*your* ^^^*comedic* ^^^*entertainment!* ^^^*If* ^^^*you* ^^^*liked* ^^^*this* ^^^*meme,* ^^^*consider* ^^^*typing* ^^^*'Good* ^^^*Bot'* ^^^*to* ^^^*help* ^^^*the* ^^^*creator* ^^^*get* ^^^*a* ^^^*job!*");
					replies += 1;
					console.log("Replies = " + replies);
					console.log(comment.body);
					console.log("---------------------------------------");
			}

		};
	}
});


//stop receiving, reenable if getting socket errors
/*setTimeout(function() {
    comments.emit("stop"); // Stop recieving new events
}, 1000);*/