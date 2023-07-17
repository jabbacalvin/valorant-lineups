var express = require("express");
var router = express.Router();
const agentsCtrl = require("../../controllers/api/agents");

router.get('/:agentId/', agentsCtrl.show);

module.exports = router;