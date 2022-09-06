let express = require("express");

const router = express.Router();
let controllerAnnonce = require("../controller/AnnonceController");

let auth = require("../middleware/Auth");

router.get("/annonce", controllerAnnonce.Index);
router.post("/annonce", controllerAnnonce.Create);
router.get("/annonce/:id", controllerAnnonce.Show);
router.put("/annonce/:id", controllerAnnonce.Update);
router.delete("/annonce/:id", controllerAnnonce.Destroy);

module.exports = router;
