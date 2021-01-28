const router = require("express").Router();

router.use("/", require("backend/src/router/twitterRouter"));
router.use("/", require("backend/src/router/pages"));

module.exports = router;
