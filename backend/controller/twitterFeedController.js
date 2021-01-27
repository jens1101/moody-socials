const twitterService = require('../service/twitter');

exports.timelineTweets = async (req, res) => {
    try {
        return res.json(await twitterService.timelineTweets(req));
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

exports.searchForTweets = async (req, res) => {
    try {
        return res.json(await twitterService.searchForTweets(req));
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}
