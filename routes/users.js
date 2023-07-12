var express = require("express");
var router = express.Router();
const usersCtrl = require("../controllers/users");
const ensureLoggedIn = require("../config/ensureLoggedIn");

//GET /users
router.get("/:id", usersCtrl.show);

module.exports = router;
