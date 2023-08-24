const { Router } = require("express");
const {getBuilding} = require("../controllers/poligonos/construcciones19_controller");
const { getLand } = require("../controllers/poligonos/terrenos19_controller");
const { get} = require("../controllers/poligonos/search_controller");
const router = Router();

router.get("/construcciones19", getBuilding);
router.get("/terrenos19", getLand);
router.get("/search/:value/:type", get);

module.exports = router;
