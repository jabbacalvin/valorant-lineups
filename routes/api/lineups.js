var express = require("express");
var router = express.Router();
const lineupsCtrl = require("../../controllers/api/lineups");

router.get('/:mapId/:agentId/', lineupsCtrl.show);

router.get('/:lineupId', lineupsCtrl.showOne);

module.exports = router;