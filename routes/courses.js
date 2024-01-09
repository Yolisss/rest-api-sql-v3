const { Course } = require("../models");
const express = require("express");
const router = express.Router();

router.get("/courses", async (req, res) => {
  //get user from req body
  const course = req.currentCourse;
  res.status(200).json({
    title: course.title,
    description: course.description,
    estimatedTime: course.emailAddress,
    materialsNeeded: course.materialsNeeded,
  });
});

module.exports = router;
