const User = require("../models/user");
const { check, validationResult } = require("express-validator");

exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array()[0].msg });
  }
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      console.log(err);
    }
    res.json({ user });
  });
};
exports.signout = (req, res) => {
  res.json({ message: "User signout" });
};
