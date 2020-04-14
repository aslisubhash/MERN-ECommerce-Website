var express = require("express");
var router = express.Router();

const signout = (req, res) => {
  res.send("User Signed Out....");
};

router.get("/signout", signout);

module.exports = router;
