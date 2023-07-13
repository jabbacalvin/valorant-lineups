const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agentSchema = new Schema({
    name: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Agent', agentSchema);
