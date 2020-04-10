var express = require("express");
var router = express.Router();

router.get("/signout", (req, res) => {
  res.send("User Signed Out....");
});

module.exports = router;
