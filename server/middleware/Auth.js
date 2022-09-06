let jwt = require("jsonwebtoken");

// add auth middleware
const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization.replace("Bearer ", "");
    jwt.verify(token, "RANDOM_TOKEN_SECRET", function (err, payload) {
      if (err) {
        res.status(401).json({ message: "Unauthorized" });
      } else next();
    });
  } catch (error) {
    res.status(401).json({ message: "erreur lors de l'authentification" });
  }
};

module.exports = auth;
