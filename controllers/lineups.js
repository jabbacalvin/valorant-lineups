const Lineup = require("../models/lineup");
const User = require("../models/user");

module.exports = {
  // show,
  new: newLineup,
  create,
};

// async function show(req, res) {
//   const lineups = await Lineup.find({});
//   console.log(lineups);
//   res.render("user/show", { lineups });
// }

function newLineup(req, res) {
  res.render("lineups/new", { title: "Add New Lineup" });
}

async function create(req, res) {
  const user = await User.findById(req.params.id);
  req.body.user = req.user._id;
  try {
    const lineup = await Lineup.create(req.body);
    // console.log(lineup);
    res.redirect(`/users/show`);
  } catch (err) {
    console.log(err);
    res.render("lineups/new", { errorMsg: err.message });
  }
}

