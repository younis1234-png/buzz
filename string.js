// you have written 182 characters, you have -42 left

// var tweet = prompt("Compose your tweet:");
// var tweetCount = tweet.length;

// or you can just add tweet.length insted of tweetcount
/*alert(
  "You have written " +
    tweetCount +
    " characters, you have left " +
    (140 - tweetCount) +
    " characters remaining"
);
*/

// we gonna use slice to cut down the characters to 140 no more;

// alert(prompt("Compose your tweet:").slice(0, 140));

// slice allow us to slice from what character to what character we want
// var name = "Younous";
// name.slice(0, 3);

// Changing firs name to uppercase
var name = prompt(" What's is your name?");

var firstChar = name.slice(0, 1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1, name.length);
var capName = upperCaseFirstChar + restOfName.toLowerCase();

alert("Hello, " + capName);
