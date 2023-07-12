var express = require('express');
var router = express.Router();
const usersCtrl = require("../controllers/users");

//GET /users
router.get("/:id", usersCtrl.show);
//GET /index
router.get('/', usersCtrl.index);

module.exports = router;