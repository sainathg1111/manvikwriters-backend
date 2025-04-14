const express = require("express");
const router = express.Router();
const { registerUser, loginUser, changePassword } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, (req, res) => {
  res.status(200).json(req.user);
});
router.put("/change-password", protect, changePassword); // ✅ New route

module.exports = router;

