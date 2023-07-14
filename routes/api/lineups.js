var express = require("express");
var router = express.Router();
const lineupsCtrl = require("../../controllers/api/lineups");

router.get('/:mapId/:agentId/', lineupsCtrl.show);

router.get('/:agentId/', lineupsCtrl.showAbilities);

module.exports = router;