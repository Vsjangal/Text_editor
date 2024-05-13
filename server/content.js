const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  name: String,
  content: String,
});

const Content = mongoose.model("Content", contentSchema, "app");

module.exports = Content;
