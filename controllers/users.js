const User = require("../models/user");

module.exports = {
  show,
  index
};

async function show(req, res) {
  res.render("users/show", { title: "Manage Lineups" });
}

async function index(req, res) {
  res.render('users/index', { title: 'Agents' });
}