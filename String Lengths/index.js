var tweet = prompt("Enter  Your Tweet");
var countTweet = tweet.length;
alert(
  "You Have Written " +
    countTweet +
    " Characters , You Have " +
    (140 - countTweet) +
    " Characters Remaining"
);
