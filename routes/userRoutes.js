const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  changePassword,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/change-password", changePassword);

// ✅ Test route for checking if backend is live
router.get("/test", (req, res) => {
  res.json({ message: "Test route working" });
});

module.exports = router;