var express = require('express');
var router = express.Router();
const passport = require("passport");
const mapsCtrl = require("../controllers/maps");

/* GET home page. */
router.get('/', mapsCtrl.index);

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect("/");
  });
});

module.exports = router;
