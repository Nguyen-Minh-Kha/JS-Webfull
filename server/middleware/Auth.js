let jwt = require("jsonwebtoken");

// add auth middleware
const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.PRIVATE_KEY, function (err, payload) {
      if (err) {
        res.status(401).json({ message: "Unauthorized" });
      } else {
        req.payload = payload;
        next();
      }
    });
  } catch (error) {
    res.status(401).json({ message: "erreur lors de l'authentification" });
  }
};

module.exports = auth;
