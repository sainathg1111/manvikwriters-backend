const express = require("express");
const router = express.Router();
const { registerUser, loginUser, changePassword } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, (req, res) => {
  res.status(200).json(req.user);
});
router.post("/change-password", protect, changePassword); // ✅ Make sure this is added

module.exports = router;

