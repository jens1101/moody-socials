const router = require("express").Router();

router.use("/", require("./twitterRouter"));
router.use("/", require("./pages"));

module.exports = router;
