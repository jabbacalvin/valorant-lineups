var express = require("express");
var router = express.Router();
const mapsCtrl = require("../controllers/maps");

//GET /maps
router.get("/", mapsCtrl.index);

// //GET /maps/:id
// router.get("/:id", mapsCtrl.show);

router.post("/:name", mapsCtrl.show);

module.exports = router;
