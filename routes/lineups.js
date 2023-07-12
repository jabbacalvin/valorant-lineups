var express = require("express");
var router = express.Router();
const lineupsCtrl = require("../controllers/lineups");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// Get /lineups/new
router.get("/new", ensureLoggedIn, lineupsCtrl.new);

module.exports = router;
