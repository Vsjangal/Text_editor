const express = require("express");
const Content = require("./content"); // Assuming this is the file where your Content model is defined
const router = express.Router();
const fs = require("fs");
router.get("/get-details", async (req, res) => {
  try {
    // // Create a new document in the 'app' collection
    // const newContent = await Content.create({
    //   name: "Test Content",
    //   content: "This is a test content.",
    // });

    // Query for the newly created document
    const foundContent = await Content.find();

    // Send the found document as the response
    res.json(foundContent);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/save-content", async (req, res) => {
    await Content.create({ name: req.body?.name ,content: decodeURIComponent(req.body?.content) });
})

module.exports = router;
