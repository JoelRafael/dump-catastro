const { Router } = require("express");
const {
  getBuilding,
} = require("../controllers/poligonos/construcciones19_controller");
const { getLand } = require("../controllers/poligonos/terrenos19_controller");
const { get } = require("../controllers/poligonos/search_controller");
const {
  saveTitular,
  getAllAdquisicion,
  getAllCaracterTitular,
  getAllDocumentoProp,
  getAllTipoDocumento,
} = require("../controllers/client/titular_controller");
const router = Router();

router.get("/construcciones19", getBuilding);
router.get("/terrenos19", getLand);
router.get("/search/:value/:type", get);
router.get("/titular/adquisicion", getAllAdquisicion);
router.get("/titular/caracter_titular", getAllCaracterTitular);
router.get("/titular/documento_propiedad", getAllDocumentoProp);
router.get("/titular/tipo_documento", getAllTipoDocumento);
router.post("/save/titular", saveTitular);

module.exports = router;
