var express = require("express");
var router = express.Router();
const mapsCtrl = require("../controllers/maps");

//GET /maps
router.get("/", mapsCtrl.index);

//GET /maps/:name
router.get("/:name", mapsCtrl.showWithUrl);

router.post("/:name", mapsCtrl.show);

module.exports = router;
