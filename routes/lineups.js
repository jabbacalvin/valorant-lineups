var express = require("express");
var router = express.Router();
const lineupsCtrl = require("../controllers/lineups");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /lineups/new
router.get("/new", ensureLoggedIn, lineupsCtrl.new);

// GET /lineups/:id
// router.get('/show', ensureLoggedIn, lineupsCtrl.show);

// POST /lineups
router.post('/', ensureLoggedIn, lineupsCtrl.create)

// EDIT /lineups/:id/edit
router.get('/:id/edit', ensureLoggedIn, lineupsCtrl.edit);

module.exports = router;