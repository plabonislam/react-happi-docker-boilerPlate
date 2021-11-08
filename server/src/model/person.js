const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    firstname: String,
    lastname: String
});

module.exports = mongoose.model("Person",personSchema);