var express = require("express");
var router = express.Router();
const usersCtrl = require("../controllers/users");
const ensureLoggedIn = require("../config/ensureLoggedIn");

//GET /users/show
router.get("/show", ensureLoggedIn, usersCtrl.show);

module.exports = router;
