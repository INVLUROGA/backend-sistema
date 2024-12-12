const { Router, Route } = require("express");
const { route } = require("./recursosHumanos.route");
const { terminologiasPorEntidad } = require("../controller/terminologia.controller");
const router = Router();

router.get("/terminologiaPorEntidad" , terminologiasPorEntidad);
module.exports = router;