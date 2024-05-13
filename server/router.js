const express = require("express");
const Content = require("./content");
const router = express.Router();
const fs = require("fs");
router.get("/get-details", async (req, res) => {
  try {
    // const newContent = await Content.create({
    //   name: "Test Content",
    //   content: "This is a test content.",
    // });

    const foundContent = await Content.find();

    res.json(foundContent);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// router.post("/save-content", async (req, res) => {
//     await Content.create({ name: req.body?.name ,content: decodeURIComponent(req.body?.content) });
// })
router.post("/save-content", async (req, res) => {
  try {
    const { name, content } = req.body;
    const existingContent = await Content.findOne({ name });
    if (existingContent) {
      existingContent.content = decodeURIComponent(content);
      await existingContent.save();
      res.status(200).send("Content updated successfully");
    } else {
      await Content.create({ name, content: decodeURIComponent(content) });
      res.status(201).send("Content created successfully");
    }
  } catch (error) {
    console.error("Error saving content:", error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
