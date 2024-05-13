const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://localhost:27017/expressapp";

async function connect() {
  try {
    await mongoose.connect(MONGODB_URI, {
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = { connect };
