var express = require("express");
var router = express.Router();
const agentsCtrl = require("../controllers/agents");

//GET /agents
router.get('/', agentsCtrl.index);
router.get('/:id', agentsCtrl.show);

module.exports = router;