var express = require("express");
var router = express.Router();
const { signout, signup } = require("../controllers/auth");
const { check, validationResult } = require("express-validator");

router.post(
  "/signup",
  [
    check("lastname", "Name should be atleast 3 char.").isLength({ min: 5 }),
    check("email", "Valid email is required").isEmail(),
    check("password", "Too small pass").isLength({ min: 3 }),
  ],
  signup
);
router.get("/signout", signout);

module.exports = router;
