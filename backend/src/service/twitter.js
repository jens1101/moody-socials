const Twit = require("twit");
const Sentiment = require("sentiment");

const sentiment = new Sentiment({});
const app = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

async function timelineTweets(req) {
  const params = {
    tweet_mode: "extended",
    lang: "en",
  };

  let response = await getTweets("/statuses/home_timeline", params);
  return await getSentimentScore(response.data, req.query.mood);
}

async function searchForTweets(req) {
  const params = {
    q: req.body.keywords,
    tweet_mode: "extended",
    lang: "en",
    count: 100,
  };

  let response = await getTweets("/search/tweets", params);
  return await getSentimentScore(response.data.statuses, req.query.mood);
}

async function getTweets(path, params) {
  try {
    return await app.get(path, params);
  } catch (e) {
    return "There was an error calling the Twitter API";
  }
}

async function getSentimentScore(tweets, mood) {
  let arrRes = [];

  for (tweet of tweets) {
    if (tweet.lang === "en") {
      let score = sentiment.analyze(tweet.full_text).score;

      if (score > 0 && mood === "positive") {
        // Mood 1 == Positive

        arrRes.push(createResponseObject(tweet));
      } else if (score < 0 && mood === "negative") {
        // Mood -1 == Negative

        arrRes.push(createResponseObject(tweet));
      } else if (score === 0 && mood === "neutral") {
        // Neutral

        arrRes.push(createResponseObject(tweet));
      }
    }
  }

  return arrRes;
}

function createResponseObject(tweet) {
  let responseTweet = new Object();
  responseTweet.name = tweet.user.name;
  responseTweet.text = tweet.full_text;
  return responseTweet;
}

module.exports = {
  timelineTweets,
  searchForTweets,
};
