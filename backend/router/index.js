const router = require('express').Router();

router.use('/', require('./twitterRouter'));

module.exports = router;
