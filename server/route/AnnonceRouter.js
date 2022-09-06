let express = require("express");

const router = express.Router();
let controllerAnnonce = require("../controller/AnnonceController");

let auth = require("../middleware/Auth");

router.get("/annonce", controllerAnnonce.Index);
router.post("/annonce", auth, controllerAnnonce.Create);
router.get("/annonce/:id", controllerAnnonce.Show);
router.put("/annonce/:id", auth, controllerAnnonce.Update);
router.delete("/annonce/:id", auth, controllerAnnonce.Destroy);
router.get("/annonce/getAnnonceUser", auth, controllerAnnonce.getAnnonceUser);

module.exports = router;
