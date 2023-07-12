var express = require("express");
var router = express.Router();
const lineupsCtrl = require("../controllers/lineups");

// Get /lineups/new
router.get("/new", lineupsCtrl.new);

module.exports = router;
