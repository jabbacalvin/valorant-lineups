var express = require("express");
var router = express.Router();
const usersCtrl = require("../controllers/users");
const ensureLoggedIn = require("../config/ensureLoggedIn");
const users = require("../controllers/users");

//GET /users/show
router.get("/show", ensureLoggedIn, usersCtrl.show);
router.delete('/:id', ensureLoggedIn, usersCtrl.delete);

module.exports = router;
