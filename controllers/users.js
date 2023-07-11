const User = require("../models/user");

module.exports = {
  show,
};

async function show(req, res) {
  res.render("users/show", { title: "Manage Lineups" });
}

