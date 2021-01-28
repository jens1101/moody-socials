const router = require('express').Router();
const { searchForTweets, timelineTweets } = require('../controller/twitterFeedController');

router.get('/timelineTweets', timelineTweets);
router.get('/searchTweets', searchForTweets);

module.exports = router;
