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
	results: 47,
  	pollTime: 4000
}


//Create snoostorm commentstream with options
const comments = client.CommentStream(streamOpts);

//On comment, perform fancy regex check to split into dict of keywords.
var statements = ["Do you speak to your mother with that mouth? ", "That is the most vulgar thing I've heard all day; 24 bot hours! ", "Excuse me, the karma gods wouldn't appreciate that language. ", "How could you say such a vulgar phrase? ", "This phrase is so vulgar that is makes me cringe (if I physically could)... ", "With the gods as my witness, I command thee to "];

comments.on('comment', (comment) => {
	var randInt = Math.round(Math.random(0,6));
	if (comment.body.length < 140){
		var authorName = comment.author.name;
		console.log(comment.body);
		console.log("Replies = " + replies);
		if(authorName != "PurityBot"){
			wordArr = comment.body.split(/[ ,.*]+/);
			keywords = ["unzips", "Unzips", "pants", "Pants", "fap", "Fap", "sigh", "Sigh", "( ͡° ͜ʖ ͡°)", "cum", "Cum", "cums", "Cums", "hail", "Hail", "satan", "Satan", "cthulu", "Cthulu", "pussy", "Pussy", "penetration", "Penetration", "Daddy", "daddy", "Anal", "anal"]

			/*
			//determine if an array contains one or more items from another array.
 			* @param {array} haystack the array to search.
 			* @param {array} arr the array providing items to check for in the haystack.
 			* @return {boolean} true|false if haystack contains at least one item from arr.
 			*/
 			var counter = 0;


			keywords.some(function (e) {
				if (wordArr.indexOf(e) >= 0){
					counter += 1;
				}
				if (counter >= 2){
					return true
				}
			});
			if(counter >= 2){
					comment.reply(statements[randInt] + "[REPENT, "  + authorName.toUpperCase() + "!](http://78.media.tumblr.com/c89cdf0ee4ce51465384d24e380c6914/tumblr_inline_nm1t7aIPC51s97ndd_500.jpg)");
					replies += 1;
			}
		};
	}
});


//stop receiving, reenable if getting socket errors
/*setTimeout(function() {
    comments.emit("stop"); // Stop recieving new events
}, 1000);*/