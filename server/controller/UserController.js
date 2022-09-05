let User = require("../model/user");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    let user = await User.create(req.body);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user" });
    console.log(error);
  }
};

// add auth middleware
exports.auth = (req, res, next) => {
  let token = req.headers.authorization.replace("Bearer ", "");
  jwt.verify(token, "RANDOM_TOKEN_SECRET", function (err, payload) {
    if (err) {
      res.status(401).json({ message: "Unauthorized" });
    } else next();
  });
};

exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    let isMatch = await bcrypt.compare(req.body.password, user.password);
    if (isMatch) {
      res.status(200).json({
        id_utilisateur: user._id,
        token: jwt.sign({ id_utilisateur: user._id }, "RANDOM_TOKEN_SECRET", {
          expiresIn: "1h",
        }),
      });
    } else {
      res.status(400).json({ message: "Invalid password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error: " + error.message });
  }
};
