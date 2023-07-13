const Agent = require("../models/agent");

module.exports = {
    show
};

async function show(req, res) {
    res.render('agents/show', { title: 'Agents' });
}