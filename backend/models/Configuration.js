const mongoose = require("mongoose");

const configurationSchema = new mongoose.Schema({
    configurationId: String,
    data: [[String]],
    remark: String,
});

module.exports = mongoose.model("Configuration", configurationSchema);