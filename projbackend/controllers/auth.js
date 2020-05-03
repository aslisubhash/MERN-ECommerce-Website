const User = require("../models/user");
exports.signup = (req, res) => {
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
