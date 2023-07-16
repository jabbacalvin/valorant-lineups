var express = require("express");
var router = express.Router();
const lineupsCtrl = require("../controllers/lineups");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /lineups/new
router.get("/new", ensureLoggedIn, lineupsCtrl.new);

// POST /lineups
router.post("/", ensureLoggedIn, lineupsCtrl.create);

// EDIT /lineups/edit/:id
router.get("/edit/:id", ensureLoggedIn, lineupsCtrl.edit);


module.exports = router;
