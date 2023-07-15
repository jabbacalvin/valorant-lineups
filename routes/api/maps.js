var express = require("express");
var router = express.Router();
const mapsCtrl = require("../../controllers/api/maps");

router.get('/:mapId/', mapsCtrl.show);

module.exports = router;