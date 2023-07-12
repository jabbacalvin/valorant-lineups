const User = require("../models/user");

module.exports = {
  show,
};

async function show(req, res) {
  // const user = await User.findById(req.params.id);
  res.render("users/show", { title: "Manage Lineups" });
}
