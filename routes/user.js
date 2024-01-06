const User = require("../models").User;
const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middleware/auth-user");

router.get("/users", authenticateUser, async (req, res) => {
  const user = req.currentUser;
  res.json({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    emailAddress: user.emailAddress,
  });
});

// Route that creates a new user.
router.post("/users", async (req, res) => {
  try {
    await User.create(req.body);
    //set location header
    res.status(201).location("/").end();
  } catch (error) {
    console.log("ERROR: ", error.name);
    if (
      error.name === "SequelizeValidationError" ||
      error.name === "SequelizeUniqueConstraintError"
    ) {
      const errors = error.errors.map((err) => err.message);
      res.status(400).json({ errors });
    } else {
      throw error;
    }
  }
});

module.exports = router;
