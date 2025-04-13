const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);

// Optional: keep this test route if you want
router.get("/", (req, res) => {
  res.send("User route working!");
});

module.exports = router;

